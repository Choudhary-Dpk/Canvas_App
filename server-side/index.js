const express = require('express');
require('dotenv').config();
var cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize');

// Connect to PostgreSQL database
const sequelize = new Sequelize({
    dialect: process.env.DIALECT,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
});

console.log(16, sequelize);
// Define a model with the new "name" column
const CanvasData = sequelize.define('CanvasData', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
});

// Create table if not exists
CanvasData.sync();

const app = express();
const port = 4001;

app.use(express.json());
app.use(cors())

app.get('/canvases', async (req, res) => {
    console.log(42);
    try {
        const canvases = await CanvasData.findAll();
        res.json({ canvases });
    } catch (error) {
        console.error('Error fetching canvases:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get canvas by ID
app.get('/canvas/:id', async (req, res) => {
    const canvasId = req.params.id;

    try {
        const canvas = await CanvasData.findByPk(canvasId);

        if (canvas) {
            res.json({ canvas });
        } else {
            res.status(404).json({ error: 'Canvas not found' });
        }
    } catch (error) {
        console.error('Error fetching canvas by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Save canvas
app.post('/saveCanvas', async (req, res) => {
    const { name, data } = req.body;

    try {
        const newCanvas = await CanvasData.create({
            name,
            data,
        });

        res.json({ canvas: newCanvas });
    } catch (error) {
        console.error('Error saving canvas:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

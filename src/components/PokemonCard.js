import * as React from 'react';

import { Card, CardHeader, Box, Avatar, IconButton } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { green, orange, purple, amber, brown, red, grey, lightGreen, blue, pink, lime, deepPurple, indigo, teal, cyan, yellow } from '@mui/material/colors';

export default function PokemonCard({ pokemon }) {
    let { name, sprites, types } = pokemon
    let bgCard

    const getColor = () => {
        let type = types[0].type.name;
        if (type === "grass") {
            bgCard = green[500]
        }
        if (type === "fire") {
            bgCard = red[500]
        }
        if (type === "bug") {
            bgCard = lightGreen[500]
        }
        if (type === "water") {
            bgCard = blue[500]
        }
        if (type === "normal") {
            bgCard = grey[500]
        }
        if (type === "poison") {
            bgCard = purple["A200"]
        }
        if (type === "fairy") {
            bgCard = pink[200]
        }
        if (type === "electric") {
            bgCard = amber[500]
        }
        if (type === "ground") {
            bgCard = brown[700]
        }
        if (type === "psychic") {
            bgCard = pink[400]
        }
        if (type === "fighting") {
            bgCard = lime[900]
        }
        if (type === "rock") {
            bgCard = brown[400]
        }
        if (type === "ghost") {
            bgCard = purple[500]
        }
        if (type === "ice") {
            bgCard = cyan["A400"]
        }
        if (type === "dragon") {
            bgCard = deepPurple[500]
        }
        if (type === "dark") {
            bgCard = grey[900]
        }
        return bgCard
    }

    return (
        <Card
            className="pokemon-card"
            sx={{
                bgcolor: getColor,
                mt: 2,
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 5px"
            }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                textTransform: "capitalize",
                position: "relative"
            }}>
                <div style={{ color: "#FFF", }}>
                    <h2 style={{ padding: 0, margin: 0 }}>{name}</h2>
                    <span>
                        {types[0].type.name}
                    </span>
                </div>
                <img style={{ width: 124, height: 124, zIndex: 1 }} src={sprites.front_default} />
                <img style={{
                    transform: "rotate(20deg)",
                    position: "absolute", width: "100px", height: "100px", bottom: 0, right: 0, zIndex: 0, opacity: ".5", marginBottom: "-20px", filter: "grayscale(0%)"
                }} src="https://toppng.com/public/uploads/thumbnail/okeball-graphic-by-maratuna-on-deviantart-banner-free-pokeball-icon-white-11563088134ll8ahuql0q.png" />
            </Box>
        </Card>
    );
}
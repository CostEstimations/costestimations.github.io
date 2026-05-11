function estimateConstructionCosts(areaSqFt) {
    // Approximate ratios (adjust as needed)
    const bricksPerSqFt = 8;        // bricks per square foot
    const cementBagsPerSqFt = 0.05; // cement bags per square foot
    const sandCftPerSqFt = 0.03;    // cubic feet of sand per square foot
    const crushCftPerSqFt = 0.02;   // cubic feet of crush per square foot
    const plumbingCostPerSqFt = 150; // PKR per square foot (example)

    // Calculations
    const bricks = Math.round(areaSqFt * bricksPerSqFt);
    const cementBags = (areaSqFt * cementBagsPerSqFt).toFixed(2);

    const sandCft = (areaSqFt * sandCftPerSqFt).toFixed(2);
    const crushCft = (areaSqFt * crushCftPerSqFt).toFixed(2);
    const plumbingCost = areaSqFt * plumbingCostPerSqFt.toFixed(2);

return {
    area: areaSqFt,
    bricks: bricks,
    cementBags: cementBags,
    sandCft: sandCft,
    crushCft: crushCft,
    plumbingCost: plumbingCost
};
};

export default estimateConstructionCosts;

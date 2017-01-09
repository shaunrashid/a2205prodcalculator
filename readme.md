# Anno 2205 Production Calculator

Web-based production calculator built on a NodeJS stack. Currently using information from the [Anno 2205 Wiki](http://anno2205.wikia.com/wiki/).


## Level 1 Goods

### Biopolymers

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Sunflower Farm | 0 | +10 Bioresin | -100c | -35w | -10e | N/A |
| Sunflower Cropland | 0 | +15 Bioresin | -75c | -26.25w | -7.5e | 4 |
| Biopolymer Factory | -10 Bioresin | +10 Biopolymers | -100c | -30w | -10e | N/A
| Biopolymer Basins | -5 Bioresin | +5 Biopolymers | -25c | -7.5w | -2.5e | 8 |

### Rice

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Rice Farm | 0 | +5 Organic Food | -20c | -15w | -5e | N/A
| Rice Field | 0 | +9 Organic Food | -18c | -13.5w | -4.5e | 4 |

### Water

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Desalinization Plant | 0 | +5 water | -100c | -35w | -10e | N/A
| Filter Unit | 0 | +5 water | -50c | -17.5w | -5e | 2 |

## Level 2 Goods

## Construct-o-Bots

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Feldspar Quarry | 0 | +5 Nano Ceramics | -100c | -55w | -30e | N/A |
| Feldspar Crusher | 0 | +5 Nano Ceramics | -50c | -27.5w | -15e | 2 |
| Cobalt Mine | 0 | +5 Cobalt | -100c | -55w | -30e | N/A |
| Cobalt Shearer | 0 | +5 Cobalt | -50c | -27.5w | -15e | 2 |
| Robot Assembly Hall | -5 Nano Ceramics & -5 Cobalt | +10 Construct-o-Bots | -200c | -110w | -50e | N/A |
| Robot Conveyor Belt | -5 Nano Ceramics & -5 Cobalt | +10 Construct-o-Bots | -100c | -55w | -25e | 8 |


## Vitamin Drinks

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Fruit Plantation | 0 | +8 Fruits | -30c | -35w | -15e | N/A |
| Fruit Orchard | 0 | +12 Fruits | -22.5c | -26.25w | -11.25e | 4 |
| Vitamin Condenser | -12 Fruits | +12 Vitamin Drinks | -150c | -30w | -30e | N/A |
| Fruit Press | -6 Fruits | +6 Vitamin Drinks | -37.5c | -7.5w | -7.5e | 6 |

## Rejuvenators

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Algae Farm | 0 | +16 Algae | -200c | -35w | -20e | N/A |
| Algae Bed | 0 | +16 Algae | -100c | -17.67w | -10e | 3 |
| Synthcell Incubator | -8 Algae | +8 Synthcells | -200c | -85w | -20e | N/A |
| Synthcell Chambers | -6 Algae | +6 Synthcells | -80c | -34w | -8e | 6 |
| Biomedical Laboratory | -16 Synthcells | +16 Rejuvenators | -200c | -85w | -20e | N/A |
| Reaction Pods | -8 Synthcells | +8 Rejuvenators | -50c | -21.3w | -5e | 6 |

## Level 3 Goods

### Luxury Food

| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Vineyard |0 | +4 Wine | -300c | -50w | -40e | N/A |
| Vineyard Terrace | 0 | +2 | -75c | -12.5w | -10e | 4 |
| Soy Farm | 0 | +4 | -300c | -50w | -50e | N/A |
| Soy Field | 0 | +4 Beans | -150c | -25w | -25e | 4 |
| Cattle Ranch | -4 Beans | +4 Beef | -450c | -50w | -150e | N/A |
| Cattle Pen | -4 Beans | +4 Beef | -337.5c | -37.5w | -112.5e | 4 |
| Food Design Workshop | -8 Beef & -8 Wine | +16 Luxury Food | -600c | -320w | -200e | N/A |
| Molecular Kitchen | -4 Beef & -4 Wine | +8 Luxury Food  | -150c | -80w  | -50e | 4 |
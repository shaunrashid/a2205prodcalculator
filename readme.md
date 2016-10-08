# Anno 2205 Production Calculator

Web-based production calculator built on a NodeJS stack. Currently using information from the [Anno 2205 Wiki](http://anno2205.wikia.com/wiki/).


## Sample Data

* 1 Vineyard:         0 Input  | +4 Wine  | -300c   | -50w   | -40e 
* 1 Vineyard Terrace: 0 Input  | +2 Wine  | -75c    | -12.5w | -10e    | x4
* 1 Soy Farm:         0 Input  | +4 Beans | -300c   | -50w   | -50e
* 1 Soy Field:        0 Input  | +4 Beans | -150c   | -25w   | -25e    | x4
* 1 Cattle Ranch:     -4 Beans | +4 Beef  | -450c   | -50w   | -150e
* 1 Cattle Pen:       -4 Beans | +4 Beef  | -337.5c | -37.5w | -112.5e | x4
* 1 Food Design Workshop:   -8 Beef & -8 Wine | +16 Luxury Food | -600c | -320w | -200e
* 1 Molecular Kitchen:      -4 Beef & -4 Wine | +8 Luxury Food  | -150c | -80w  | -50e | x4


| Building | Input | Output | Credits | Workers | Energy | Max Modules |
|----------|------:|-------:|--------:|--------:|-------:|------------:|
| Vineyard |0 | +4 Wine | -300c | -50w | -40e | N/A |
| Vineyard Terrace | 0 | +2 | -75c | -12.5w | -10e | 4 |
| Soy Farm | 0 | +4 | -300c | -50w | -50e | N/A |
| Soy Field | 0 | +4 Beans | -150c | -25w | -25e | 4 |
| Cattle Ranch | -4 Beans | +4 Beef | -450c | -50w | -150e | N/A |
| Cattle Pen | -4 Beans | +4 Beef | -337.5c | -37.5w | -112.5e | 4 |
| Food Design Workshop | -8 Beef & -8 Wine | +16 Luxury Food | -600c | -320w | -200e | N/A
| Molecular Kitchen | -4 Beef & -4 Wine | +8 Luxury Food  | -150c | -80w  | -50e | 4 |
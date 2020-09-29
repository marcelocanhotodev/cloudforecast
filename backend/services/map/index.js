async function MapService(dimensionx,dimensiony,clouds,airports){
     return await createMap(dimensionx,dimensiony,clouds,airports);
};

async function createMap(dimensionx,dimensiony,clouds,airports){
    let originmap = await createInitialMap(dimensionx,dimensiony);
    const sourceAirports = airports;

    while(clouds > 0){
        let x = getRandomInt(0,dimensionx -1);
        let y = getRandomInt(0,dimensiony -1);

        if(originmap[x][y] == 0){
            originmap[x][y] = 1;
            clouds--;
        }; 
    };

    while(airports > 0){
        let x = getRandomInt(0,dimensionx -1);
        let y = getRandomInt(0,dimensiony -1);

        if(originmap[x][y] == 0){
            originmap[x][y] = 2;
            airports--;
        }; 
    };

    return await addDays(originmap,sourceAirports);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

async function addDays(Arr,airports){
   const newArr = JSON.parse(JSON.stringify(Arr));
   let sourceArr = JSON.parse(JSON.stringify(Arr));
   let firstDay = 0;
   let lastDay = 1;
   
   while(airports > 0){
        sourceArr.forEach((dmx,indexDmx) =>{   
            dmx.forEach((dmy,indexDmy) =>{
               if(dmy == 1){
                    let cloudUP    =  [(indexDmx - 1),indexDmy];
                    let cloudDonw  =  [(indexDmx + 1),indexDmy];
                    let cloudLeft  =  [indexDmx,(indexDmy - 1)];
                    let cloudRight =  [indexDmx,(indexDmy + 1)];              
                
                    if(sourceArr[cloudUP[0]] != undefined){
                        if((sourceArr[cloudUP[0]][cloudUP[1]]) != undefined){
                            

                            if((Arr[cloudUP[0]][cloudUP[1]]) == 2){
                                if((newArr[cloudUP[0]][cloudUP[1]]) == 2){
                                    if(firstDay === 0)
                                       firstDay = lastDay;
                                    airports--;
                                };
                            };
                            newArr[cloudUP[0]][cloudUP[1]] = 1;
                        };
                    };
        
                    if(sourceArr[cloudDonw[0]] != undefined){
                        if((sourceArr[cloudDonw[0]][cloudDonw[1]]) != undefined) {  
                            if((Arr[cloudDonw[0]][cloudDonw[1]]) == 2){
                                if((newArr[cloudDonw[0]][cloudDonw[1]]) == 2){
                                    if(firstDay === 0)
                                       firstDay = lastDay;
                                    airports--;
                                };
                            };
                            newArr[cloudDonw[0]][cloudDonw[1]] = 1;
                        };
                    };
        
                    if(sourceArr[cloudLeft[0]] != undefined){
                        if((sourceArr[cloudLeft[0]][cloudLeft[1]]) != undefined){
                            if((Arr[cloudLeft[0]][cloudLeft[1]]) == 2){
                                if((newArr[cloudLeft[0]][cloudLeft[1]]) == 2){
                                    if(firstDay === 0)
                                       firstDay = lastDay;
                                    airports--;
                                };
                            };
                            newArr[cloudLeft[0]][cloudLeft[1]] = 1;
                        };
                    };
        
                    if(sourceArr[cloudRight[0]] != undefined){
                        if((sourceArr[cloudRight[0]][cloudRight[1]]) != undefined){
                            if((Arr[cloudRight[0]][cloudRight[1]]) == 2){
                                if((newArr[cloudRight[0]][cloudRight[1]]) == 2){
                                    if(firstDay === 0)
                                       firstDay = lastDay;
                                    airports--;
                                };
                            };
                            newArr[cloudRight[0]][cloudRight[1]] = 1;
                        };
                    };
               };
            });
        });

        sourceArr = newArr;
        lastDay++;
   };
   
   return {map: newArr, firstDay, lastDay}
};

async function createInitialMap(dimensionx,dimensiony){
    let map = [];
    
    for(let axisx = 1; axisx <= dimensionx; axisx++) {
        let line = [];
        for(let axisy = 1; axisy <= dimensiony; axisy++){
            line.push(0)
        };
        map.push(line);
    };

    return map;
};

module.exports = MapService;


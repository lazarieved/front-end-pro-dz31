function deepFreeze(obj){
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof obj[key] === 'object'){
            deepFreeze(obj[key])
        };
        Object.defineProperty(obj, key, {value : value, writable: false, configurable: false});  
    });
};
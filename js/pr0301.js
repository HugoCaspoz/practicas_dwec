function cloneObject ( obj ){

        let clone = Object.assign( {}, obj );
        return (clone);

        };
        
        console.log(cloneObject("hola"));
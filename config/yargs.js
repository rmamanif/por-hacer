
const ops={
    descripcion:{
        demand:true,
        alias:'d'
    }    
}

const argv = require('yargs')
    .command('crear','Crea tareas',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de tarea por hacer'
        }
    })
    .command('actualizar','Actualiza tareas',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de tarea por hacer'
        },
        completado:{
            default:true,
            alias:'c',
            desc:'Marca como completado o pendiente la tarea'
        }
        }
    ).command('borrar','borra tareas',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'Descripcion de tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports={argv};

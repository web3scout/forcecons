import {ForceNode} from '../forcenode.js'


(async ()=>{

console.log('fndb-test1..')

const fn = await ForceNode()

console.log('fn:',fn)

fn.run()

  
})()

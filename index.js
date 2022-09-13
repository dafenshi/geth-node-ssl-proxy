///home/ec2-user/go-ethereum/build/bin/geth  --rpcport 48545 --allow-insecure-unlock --cache=4096 --maxpeers=50 --rpc --rpcaddr "0.0.0.0" --rpccorsdomain "*" --rpcapi="db,eth,net,web3,personal,admin,debug,miner,txpool" >> /home/ec2-user/geth.log 2>&1 &
const fs = require('fs')
const { exec } = require('child_process');

console.log("Starting up geth node...")
try{

  exec('geth --http.port 48545 --http.vhosts=* --cache=4096 --maxpeers=50 --http --http.addr "0.0.0.0" --http.corsdomain "*" --http.api="db,eth,net,engine,admin,web3,debug,txpool" --authrpc.jwtsecret "/home/ubuntu/geth-node-ssl-proxy/prysm/jwt.hex" >> ./geth.log 2>&1', (err, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  })
}catch(e){
  console.log(e)
}

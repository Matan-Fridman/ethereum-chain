// .\geth --datadir ./node1 account new
// .\geth --datadir ./node1 init genesis.json
// .\geth --datadir ./node1 --syncmode "full" --port 30304 --http --http.addr "localhost" --http.port 8552 --http.api "personal,eth,net,web3,txpool,miner,admin" --http.corsdomain="*" --networkid 2345 --allow-insecure-unlock --authrpc.port 8553 --unlock e7260bb8fc14fd5a423527c386805e62e20167a4 --password pass.txt --miner.etherbase 'e7260bb8fc14fd5a423527c386805e62e20167a4'  console
// admin.addPeer("")
// miner.start()

// .\geth --datadir ./node2 init genesis.json
// .\geth --datadir ./node2 --syncmode "full" --port 30305 --http --http.addr "localhost" --http.port 8554 --http.api "personal,eth,net,web3,txpool,miner,admin" --http.corsdomain="*" --networkid 2345 --allow-insecure-unlock --authrpc.port 8555 --ipcdisable console  

// .\geth --datadir ./node3 init genesis.json
// .\geth --datadir ./node3 --syncmode "full" --port 30306 --http --http.addr "localhost" --http.port 8556 --http.api "personal,eth,net,web3,txpool,miner,admin" --http.corsdomain="*" --networkid 2345 --allow-insecure-unlock --authrpc.port 8557 --ipcdisable console

// eth.sendTransaction({from:eth.accounts[0], to:"0x0824039cDcaB28Faf1cc75a8bE7583720aF240eF", value: web3.toWei(0.5, "ether")})
   
let abi = [{"inputs": [],"name": "retrieve","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "number","type": "uint256"}],"name": "set","outputs": [],"stateMutability": "nonpayable","type": "function"}]  
// let bytecode ='608060405260055f553480156012575f80fd5b50610143806100205f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80632e64cec11461003857806360fe47b114610056575b5f80fd5b610040610072565b60405161004d919061009b565b60405180910390f35b610070600480360381019061006b91906100e2565b61007a565b005b5f8054905090565b805f8190555050565b5f819050919050565b61009581610083565b82525050565b5f6020820190506100ae5f83018461008c565b92915050565b5f80fd5b6100c181610083565b81146100cb575f80fd5b50565b5f813590506100dc816100b8565b92915050565b5f602082840312156100f7576100f66100b4565b5b5f610104848285016100ce565b9150509291505056fea26469706673582212207dbeaf28d44d56607d90e7f3192d5f336bf924fa61b6c16c2ab3144fda19241564736f6c63430008190033';
let contract = eth.contract(abi);

// let gas = eth.estimateGas({ data: "0x"+bytecode });
// var tx = { from: eth.accounts[0], data: "0x"+bytecode, gas: 100000 };
// var deployed = contract.new(tx);
var instance2 = contract.at("0x22c6055B60b97FAb05676671c05f0cE825E92445")
instance2.retrieve.call()


instance2.set(100, { from: eth.accounts[0], gas: 1000000, value: 1000 })
instance2.retrieve()
    //0x1fF475332bFD1028FB951543b6b30e200BBd9c49
    379865732090472520
    eth.defaultAccount = eth.accounts[0];
    eth.getTransactionCount("0xDA1be71F2133501c08E2EdD030997D32887a9D57")
for(let event of events){
    console.log(event) 
    eth.sendTransaction({from: eth.accounts[0], to: "0x14d8B3edfCe1A656d9DAE04aF2219bdE6338De5B", data})
}
instance2.retrieve.call()
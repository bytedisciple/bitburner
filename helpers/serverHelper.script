function getBuyOrUpgradeWeakest(){
    server = getAvailableServer(true);
    if(server !== null){
        return server;
    }
    return upgradeWeakest();
}

function getAvailableServer(shouldPurchase){
    servers = getPurchasedServers();
    for(var i in servers){
        server = servers[i];
        ram = getServerRam(server);
        if(ram[1] === 0){
            return server;
        }
    }
    if(shouldPurchase && canPurchaseNewServer()){
        return buyMaxServer("default");
    }
    return null;
}

function buyMaxServer(serverName){
    return purchaseServer(serverName, getMaxRam());
}

function upgradeWeakest(){
    servers = getPurchasedServers();
    minServer = null;
    //don't bother considering cluster that have more ram than we can purchase
    minRam = getMaxRam(); 
    plannedRam = minRam;
    for(var i in servers){
        server = servers[i];
        ram = getServerRam(server);
        if(ram[0] < minRam ){
            minRam = ram[0];
            minServer = server;
        }
    }
    
    if(minServer !== null){
        print("Upgrading " + minServer + " from " + minRam + "GB to "+plannedRam+"GB.");
        killall(minServer);
        deleteServer(minServer);
        return purchaseServer(serverName, plannedRam);
    } else {
        print("Could not find a server to upgrade");
    }
    return null;
}

function getMaxRam(){
    funds = getServerMoneyAvailable("home");
    for (i = 20; i > 1; i--) {
        ram = Math.pow(2, i);
        if (funds >= getPurchasedServerCost(ram)) {
            return ram;
        }
    }    
    return 2;
}

function canPurchaseNewServer(){
    return getPurchasedServerLimit() <= getPurchasedServers().length;
}

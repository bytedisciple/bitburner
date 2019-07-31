hostname=args[0];
while(getServerMoneyAvailable(hostname) < getServerMaxMoney(hostname) * 0.65){
    grow(hostname, {threads : args[2]});
}
spawn("weaken.script", args[3], args[0], args[1], args[2], args[3])

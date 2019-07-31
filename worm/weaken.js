hostname = args[0];
while(getServerSecurityLevel(hostname) > getServerBaseSecurityLevel(hostname)){
    weaken(hostname, {threads : args[3]});
}
spawn("hack.script", args[1], args[0], args[1], args[2], args[3])

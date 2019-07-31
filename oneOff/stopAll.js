currentHost = getHostname();
targets = scan(currentHost, true);
for (var i in targets) {
    target = targets[i];
    if(target === args[0]){
        continue;
    }
    if (hasRootAccess(target)) {
        killall(target);
        scp(getScriptName(), target);
        exec(getScriptName(), target, 1, currentHost);
    }
}

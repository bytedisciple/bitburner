hostname = args[0];
res = getServerRam(hostname);
totalRam = res[0];
ramUsed = res[1];
freeRam = totalRam - ramUsed;

scp("hack.script", hostname);
ramNeeded = getScriptRam('hack.script', hostname);
numThreads = Math.floor(freeRam / ramNeeded);

print("numThreads = " + numThreads);
if (numThreads > 0) {
    exec("hack.script", hostname, numThreads, hostname);
}

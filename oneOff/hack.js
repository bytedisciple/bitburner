while (getServerMoneyAvailable(args[0]) > getServerMaxMoney(args[0]) * 0.25) {
    hack(args[0], { threads: args[1] })
}
spawn("grow.script", args[2], args[0], args[1], args[2], args[3])

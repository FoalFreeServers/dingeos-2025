#! /bin/bash


# Change arguments here
export MINECRAFTJAR=fabric-server-mc.1.20.1-loader.0.16.10-launcher.1.0.1.jar
#export MINECRAFTJAR=1.20.1.jar
export RAM=8G
export JAVA=/home/sweetie/bin/jdk-17.0.14+7/bin/java


export LOCKFILE=minecraft.pid

if [ -f $LOCKFILE ]
then
echo 'it looks like minecraft is already running'
echo 'if you think that is wrong and theres a stale lockfile, here is the process:'
ps `cat $LOCKFILE`
echo '====='
echo "if there is no process, delete $LOCKFILE and run this script again"
exit
fi

# remove the lock file if control-c
trap "rm -f $LOCKFILE; exit" INT TERM EXIT

echo $$ > $LOCKFILE

#while true;
#do

ulimit -a

$JAVA -Xms$RAM -Xmx$RAM \
-Dmixin.debug.export=true \
-Dmixin.debug.verbose=true \
-XX:+UseG1GC \
-XX:+ParallelRefProcEnabled \
-XX:MaxGCPauseMillis=200 \
-XX:+UnlockExperimentalVMOptions \
-XX:+DisableExplicitGC \
-XX:+AlwaysPreTouch \
-XX:G1NewSizePercent=40 \
-XX:G1MaxNewSizePercent=50 \
-XX:G1HeapRegionSize=32M \
-XX:G1ReservePercent=15 \
-XX:G1HeapWastePercent=5 \
-XX:G1MixedGCCountTarget=4 \
-XX:InitiatingHeapOccupancyPercent=20 \
-XX:G1MixedGCLiveThresholdPercent=90 \
-XX:G1RSetUpdatingPauseTimePercent=5 \
-XX:SurvivorRatio=32 \
-XX:+PerfDisableSharedMem \
-XX:MaxTenuringThreshold=1 \
-jar $MINECRAFTJAR nogui

#rm world/minecolonies/*.zip

#~/bin/backup-minecraft-full.sh

cd mods/
ls -lh *.jar > mods.txt
cd ..

git add .
git commit -m "Sync from Server."
git push

#echo restarting in 5 seconds...
#sleep 1
#echo restarting in 4 seconds...
#sleep 1
#echo restarting in 3 seconds...
#sleep 1
#echo restarting in 2 seconds...
#sleep 1
#echo restarting in 1 second...
#sleep 1

#done

rm -f $LOCKFILE



until (curl mysql:3306);
do
	echo "Launch mysql..."
	sleep 1
done
echo "Finish launch mysql"

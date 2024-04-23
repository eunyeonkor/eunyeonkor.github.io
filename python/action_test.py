import datetime as dt

f = open("foo.txt", 'w')
now = dt.datetime.now()
f.write("Action Test")
f.write(now)
f.close()
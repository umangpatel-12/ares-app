def getData():
    with open('names.txt') as f:
        names = f.read()
        names = names.split()
        return names
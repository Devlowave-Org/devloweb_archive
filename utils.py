import bcrypt

def hash_password(password):
    password = password.encode("utf-8")
    salt = bcrypt.gensalt()
    encrypted = bcrypt.hashpw(password, salt)
    return encrypted
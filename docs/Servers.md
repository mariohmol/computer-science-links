

# SSH

To manage with SSH keys, first you have to create your locak private and public keys

In your local machine create and copy the public key.
```sh
ssh-keygen
cat ~/.ssh/id_rsa.pub
```


## Server

Connect to your server and paste the public key inside the authorized_keys:
```sh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
nano ~/.ssh/authorized_keys
```

## Github

Go to Github, create a new key [here](https://github.com/settings/keys), clicking in `New SSH Key`.

Git it a name and then paste your public key there.
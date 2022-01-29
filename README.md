# fedipoke
[fedipoke](fedipoke.png)
a federated poking/booping service  
*@nekojanai boops @absturztaube*

# config
the application will create a `.env` file in its root directory which you need to fill out or you can provide one yourself  
example `.env` file
```
DOMAIN=example.xyz
USERNAME=poke
PORT=1337
PUBLICKEY_FILE=publickey.txt
PRIVATEKEY_FILE=privatekey.txt
```
as you can see it also has entries for a keypair and their respective files, you can either provide your own or  
the application will generate one for you if you are missing those config keys in your `.env` file  
an error will be thrown if you have those two filepaths configured but the files are not present
## install
[deno](https://deno.land/manual@v1.16.0/getting_started/installation)  
[docker](https://docs.docker.com/engine/install/)  
(optional) [docker-compose](https://docs.docker.com/compose/install/)
 
## start dev container
use `$ ./rebuild.sh`  

or `$ docker-compose up`
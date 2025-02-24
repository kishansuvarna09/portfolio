# Create SSL Certificates

We'll generate a self-signed certificate using OpenSSL. Start by creating a configuration file (my-site.conf) with the necessary details:

```
[req]
default_bits       = 2048
default_keyfile    = localhost.key
distinguished_name = req_distinguished_name
req_extensions     = req_ext
x509_extensions    = v3_ca

[req_distinguished_name]
countryName                 = Country Name (2 letter code)
countryName_default         = AE
stateOrProvinceName         = State or Province Name (full name)
stateOrProvinceName_default = Dubai
localityName                = Locality Name (eg, city)
localityName_default        = Dubai
organizationName            = Organization Name (eg, company)
organizationName_default    = Itchygeek
organizationalUnitName      = organizationalunit
organizationalUnitName_default = Development
commonName                  = Common Name (e.g. server FQDN or YOUR name)
commonName_default          = localhost
commonName_max              = 64

[req_ext]
subjectAltName = @alt_names

[v3_ca]
subjectAltName = @alt_names

[alt_names]
DNS.1   = localhost
DNS.2   = 127.0.0.1
```

Now, use the following OpenSSL commands to generate the required certificates:

### Generate Certificate Signing Request (CSR):

```bash
openssl req -out server.csr -newkey rsa:4096 -nodes -config my-site.conf
```

### Generate a Self-Signed SSL Certificate:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout privkey.pem -out fullchain.pem -config my-site.conf
```

### Create a Certificate Authority (CA) Certificate:

```bash
openssl req -x509 -new -nodes -key privkey.pem -sha256 -days 3650 -out server.pem -config my-site.conf
```

### Convert Certificates to PKCS#12 Format (Optional)

```bash
openssl pkcs12 -export -out server.pfx -inkey privkey.pem -in fullchain.pem
```

### Verify the Certificate Details:

```bash
openssl x509 -in fullchain.pem -noout -text | grep -E "Subject:|DNS:"
```

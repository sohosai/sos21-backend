{ config, pkgs, ... }:
{
  imports = [
    ./sos21-api-server.nix
    ./nginx.nix
    ./acme.nix
    ./staging.nix
  ];

  services.nginx = {
    virtualHosts."api.beta.online.sohosai.com" = {
      enableACME = true;
      locations."/" = {
        proxyPass = "http://localhost:${toString config.services.sos21-api-server.port}/";
      };
    };
  };

  services.sos21-api-server = {
    enable = true;
    port = 3000;
    firebaseProjectId = "sos21-beta";
    databaseName = "sos21-beta";
    s3ObjectBucket = "sos21-beta-objects";
  };
}

#!/usr/bin/env bash

if [ "$1" = "prod" ];
then
  echo "Switching to prod environment"
  yes | cp -rf "environments/prod/google-services.json" ./
  yes | cp -rf "environments/prod/GoogleService-Info.plist" ./
  yes | cp -rf "environments/prod/constants.ts" ../../packages/utils/src
elif [ "$1" = "dev" ]
then
  echo "Switching to dev environment"
  yes | cp -rf "environments/dev/google-services.json" ./
  yes | cp -rf "environments/dev/GoogleService-Info.plist" ./
  yes | cp -rf "environments/dev/constants.ts" ../../packages/utils/src
elif [ "$1" = "envs" ]
then
  echo "ID    FIREBASE PROJECT"
  echo "prod  production"
  echo "dev   development"
else
  echo "Run ‘sh switchenv.sh envs’ to list available environments."
fi

# environment variables
cp ../../.env ./.env
set -a; source .env; set +a

# pull
STORYBLOK_LOGIN=$STORYBLOK_SOURCE_EMAIL STORYBLOK_TOKEN=$STORYBLOK_SOURCE_TOKEN npx storyblok pull-components --space $STORYBLOK_SOURCE_SPACE

# push
STORYBLOK_LOGIN=$STORYBLOK_TARGET_EMAIL STORYBLOK_TOKEN=$STORYBLOK_TARGET_TOKEN npx storyblok push-components --space $STORYBLOK_TARGET_SPACE ./components.$STORYBLOK_SOURCE_SPACE.json

# move files to config
cp ./components.$STORYBLOK_SOURCE_SPACE.json ./config/
rm ./components.$STORYBLOK_SOURCE_SPACE.json
cp ./presets.$STORYBLOK_SOURCE_SPACE.json ./config/
rm ./presets.$STORYBLOK_SOURCE_SPACE.json

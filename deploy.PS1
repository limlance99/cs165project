Param(
    $m
)
cd frontend
npm run build

cd ..
git add .
git commit -m "$m"
git push heroku master
Param(
    $m
)
cd frontend
npm run build

cd ..

go mod tidy
go mod vendor
git add .
git commit -m "$m"
git push heroku master
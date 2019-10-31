Param(
    $m
)


go mod tidy
go mod vendor
git add .
git commit -m "$m"
git push heroku master
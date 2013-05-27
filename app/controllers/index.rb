get '/' do
  erb :index
end

post '/' do
  @user = User.find_or_create_by_username(username: params[:username])

  if @user.tweets_stale?
    @user.fetch_tweets!
  end

  @tweets = @user.tweets
  erb :_tweets, :layout => false
end

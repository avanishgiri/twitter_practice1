get '/' do
  erb :index
end

post '/' do
  @user = User.find_or_create_by_username(username: params[:username])

  @user.fetch_tweets! if @user.tweets_stale?  
  @tweets = @user.tweets
  p @tweets
  erb :_tweets, :layout => false
end

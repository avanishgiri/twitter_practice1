class User < ActiveRecord::Base
  has_many :tweets
  
  def fetch_tweets!
    self.tweets.delete_all
    tweets = Twitter.user_timeline(self.username, :count => 200)
    tweets.each do |tweet|
      self.tweets << Tweet.create(text: tweet[:text])
    end
    self.updated_at = Time.now
    self.save
  end

  def tweets_stale?
    minutes_since_update = (Time.now - self.updated_at)/60 #convert to minutes
    invalidation_time = 15
    minutes_since_update > invalidation_time || self.tweets.empty?
  end
end

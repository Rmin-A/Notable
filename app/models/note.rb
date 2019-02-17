class Note < ApplicationRecord

  has_many :taggings
  
  has_many :tags, :through => :taggings

  belongs_to :user
  belongs_to :notebook


end

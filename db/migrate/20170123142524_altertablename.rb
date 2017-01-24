class Altertablename < ActiveRecord::Migration
  def change
  	rename_table :contactus, :contact_us
  end
end




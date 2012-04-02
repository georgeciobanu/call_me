class CreateVoices < ActiveRecord::Migration
  def change
    create_table :voices do |t|
      t.string :file
      t.string :name

      t.timestamps
    end
  end
end

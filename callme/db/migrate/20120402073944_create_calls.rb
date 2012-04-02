class CreateCalls < ActiveRecord::Migration
  def change
    create_table :calls do |t|
      t.string :from
      t.datetime :when
      t.string :what

      t.timestamps
    end
  end
end

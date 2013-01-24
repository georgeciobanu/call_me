class VoicesController < ApplicationController
  # GET /voices
  # GET /voices.json
  def index
    @voices = Voice.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @voices }
    end
  end

  # GET /voices/1
  # GET /voices/1.json
  def show
    @voice = Voice.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @voice }
    end
  end

  # GET /voices/new
  # GET /voices/new.json
  def new
    @voice = Voice.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @voice }
    end
  end

  # GET /voices/1/edit
  def edit
    @voice = Voice.find(params[:id])
  end

  # POST /voices
  # POST /voices.json
  def create
    Rails.logger.info(params)
    
    render  'callmetalknow'

  end

  # PUT /voices/1
  # PUT /voices/1.json
  def update
    @voice = Voice.find(params[:id])

    respond_to do |format|
      if @voice.update_attributes(params[:voice])
        format.html { redirect_to @voice, notice: 'Voice was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @voice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /voices/1
  # DELETE /voices/1.json
  def destroy
    @voice = Voice.find(params[:id])
    @voice.destroy

    respond_to do |format|
      format.html { redirect_to voices_url }
      format.json { head :no_content }
    end
  end
end

require 'twilio-ruby'


class CallsController < ApplicationController
  # GET /calls
  # GET /calls.json
  def index
    @calls = Call.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @calls }
    end
  end

  # GET /calls/1
  # GET /calls/1.json
  def show
    @call = Call.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @call }
    end
  end

  # GET /calls/new
  # GET /calls/new.json
  def new
    @call = Call.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @call }
    end
  end

  # GET /calls/1/edit
  def edit
    @call = Call.find(params[:id])
  end

  # POST /calls
  # POST /calls.json
  def create
    # @call = Call.new(params[:call])
    Rails.logger.info(params)
    
    account_sid = 'AC7826633a885d44f28853ae316329bf5c'
    auth_token = '2c810be1942f15a9f79de953af4c6b3d'
    
    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new account_sid, auth_token
    
    # Hack! A proper scheduler is required here
    sleep(30)
    @call = @client.account.calls.create(
      :from => '+19133966846',
      :to => params[:From],
      :url => 'http://callme-georgeciobanu.dotcloud.com/voices.xml'
    )
    

    # respond_to do |format|
    #   if @call.save
    #     format.html { redirect_to @call, notice: 'Call was successfully created.' }
    #     format.json { render json: @call, status: :created, location: @call }
    #   else
    #     format.html { render action: "new" }
    #     format.json { render json: @call.errors, status: :unprocessable_entity }
    #   end
    # end
    render :json => params
  end

  # PUT /calls/1
  # PUT /calls/1.json
  def update
    @call = Call.find(params[:id])

    respond_to do |format|
      if @call.update_attributes(params[:call])
        format.html { redirect_to @call, notice: 'Call was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @call.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /calls/1
  # DELETE /calls/1.json
  def destroy
    @call = Call.find(params[:id])
    @call.destroy

    respond_to do |format|
      format.html { redirect_to calls_url }
      format.json { head :no_content }
    end
  end
end

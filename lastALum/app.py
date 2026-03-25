from flask import Flask,render_template,request, redirect,url_for

from pymongo import MongoClient

cluster=MongoClient("127.0.0.1:27017")
db=cluster['project']
alumnus=db['alumnus']
admin=db['admin']
users=db['users']
events=db["events"]
posts=db['posts']
mentors=db['mentors']

app=Flask(__name__)

@app.route("/")
def home():
  return render_template("index.html")



@app.route("/stulogin")
def stulogin():
  return render_template("stulogin.html")
@app.route("/adminlanding")
def adminlanding():
  return render_template("adminlanding.html")
@app.route("/adminlogin")
def adminlogin():
  return render_template("adminlogin.html")
@app.route("/alumlanding")

def alumlanding():
  return render_template("alumlanding.html")
@app.route("/alumlogin")
def alumlogin():
  return render_template("alumlogin.html")
@app.route("/alumnipage")
def alumnipage():
  return render_template("alumnipage.html")
@app.route("/alumregister")
def alumregister():
  return render_template("alumregister.html")
@app.route("/dashboard")
def dashboard():
  return render_template("dashboard.html")
@app.route("/jobpostspage")
def jobpostspage():
  return render_template("jobpostingpage.html")
@app.route("/eventspage")
def eventspage():
  return render_template("eventspage.html")
@app.route("/studentpage")
def studentpage():
  return render_template("studentpage.html")
@app.route("/stulandingpage")
def stulandingpage():
  return render_template("stulandingpage.html")
@app.route("/stulandingpage2")
def stulandingpage2():
  return render_template("stulandingpage2.html")
@app.route("/sturegister")
def sturegister():
  return render_template("sturegister.html")
'''@app.route("/profile")
def profile():
  return render_template("profile.html")'''

@app.route("/postsdisplay")
def postsdisplay():
  postdata=posts.find()
  return render_template("postsdisplay.html",postdata=postdata)

@app.route("/eventdisplay")
def eventdisplay():
  eventsdata=events.find()
  return render_template("eventdisplay.html",evdata=eventsdata)

@app.route("/stulog",methods=['post'])
def stulog():
  stuemail=request.form.get("email")
  stupwd=request.form.get("password")
  print(stuemail,stupwd)
  user=users.find_one({'email':stuemail})
  print(user)
  if(user):
    print("user ack")
    if user["password"]==stupwd:
      print("this page") 
      return render_template("stulandingpage2.html",status="working")
    else:
      return render_template("stulogin.html",status="invalid credentials")
  else:
    return render_template("stulogin.html",status="invalid credentials")


@app.route("/sturegisterdata", methods=['POST'])
def sturegisterdata():
    # Retrieve form data
    stufname = request.form.get("first-name")
    stulname = request.form.get("last-name")
    sturegno = request.form.get("register-number")
    stuemail = request.form.get("email")
    stupwd = request.form.get("password")
    stuconpwd = request.form.get("confirm-password")
    
    print("Received data from form:", stufname, stulname, sturegno, stuemail) 
    # Check if passwords match
    if stupwd != stuconpwd:
        return render_template("sturegister.html", status="Passwords do not match")
    # Check if the user already exists by email
    user = users.find_one({'email': stuemail})
    if user:
        print("User already exists")
        return render_template("sturegister.html", status="Email already exists")
    # Insert the new user data into MongoDB
    users.insert_one({
        'first-name': stufname,
        'last-name': stulname,
        'register-number': sturegno,
        'email': stuemail,
        'password': stupwd
    })
    print("New user inserted into the database")
    # Redirect to login page after successful registration
    return render_template("stulogin.html", status="Registration successful, please log in.")


@app.route("/alumregisterdata", methods=['POST'])  
def alumregisterdata():
  alumfname=request.form.get("first-name")
  alumlname=request.form.get("last-name")
  alumlinkedin=request.form.get("linkedin")
  alumyear=request.form.get("year")
  alumcont=request.form.get("contact")
  alumemail=request.form.get("email")
  alumpwd=request.form.get("password")
  alumconpwd = request.form.get("confirm-password")
  print(alumemail,alumfname,alumlname,alumlinkedin,alumpwd,alumyear,alumcont)# Check if passwords match
  if alumpwd != alumconpwd:
    return render_template("sturegister.html", status="Passwords do not match")
  # Check if the user already exists by email
  alumni = alumnus.find_one({'email': alumemail})
  if(alumni):
    print(alumni)
  print("success")
  print(alumemail,alumfname,alumlname,alumlinkedin,alumpwd,alumyear,alumcont)
  # Insert the new user data into MongoDB
  alumnus.insert_one({
      'first-name': alumfname,
      'last-name': alumlname,
      'contact-number': alumcont,
      'email': alumemail,
      'password': alumpwd,
      'dec-year':alumyear,
      'linkedin':alumlinkedin
  })
  print("New user inserted into the database")
  # Redirect to login page after successful registration
  return render_template("alumlogin.html", status="Registration successful, please log in.")
    
  
    
@app.route("/alumlog",methods=['post'])
def alumlog():
  alemail=request.form.get("email")
  alpwd=request.form.get("password")
  print(alemail,alpwd)
  alumni=alumnus.find_one({'email':alemail})
  print(alumni)
  if(alumni):
    print("user ack")
    if alumni["password"]==alpwd:
      print("this page")
      return render_template("alumlanding.html",status="working")
    else:
      return render_template("alumlogin.html",status="invalid credentials")
  else:
    return render_template("alumlogin.html",status="invalid credentials")


@app.route("/adminlog",methods=['post'])
def adminlog():
  ademail=request.form.get("email")
  adpwd=request.form.get("password")
  print(ademail,adpwd)
  if(ademail=="navya@gmail.com"):
    if adpwd=='1234':
      print("this page")
      return render_template("adminlanding.html",status="working")
    else:
      return render_template("adminlogin.html",status="invalid credentials")
  else:
    return render_template("adminlogin.html",status="invalid credentials")
  


'''@app.route("/adminlog",methods=['post'])
def adminlog():
  ademail=request.form.get("email")
  adpwd=request.form.get("password")
  print(ademail,adpwd)
  ad=admin.find_one({'email':ademail})
  print(ad)
  if(ad):
    
    if admin["password"]==adpwd:
      print("user ack")
      return render_template("adminlanding.html",status="working")
    else:
      return render_template("adminlogin.html",status="invalid credentials")
  else:
    return render_template("adminlogin.html",status="invalid credentials")
'''

@app.route("/addevent", methods=['post'])
def addevent():
  eventname=request.form.get("event-name")
  eventdate=request.form.get("event-date")
  eventvenue=request.form.get("event-venue")
  eventdescription=request.form.get("event-description")
  eventphoto=request.form.get("event-photo")
  event=events.find_one({'event-name':eventname})
  print(eventname)
  if(event):
    print("event already")
    return render_template("eventspage.html")
  events.insert_one({
    'event-name':eventname,
    'event-date':eventdate,
    'event-venue':eventvenue,
    'event-description':eventdescription,
    'event-photo':eventphoto
  })
  return render_template("eventspage.html",status="event added successfully")

@app.route("/addjobpost", methods=['post'])
def addjobpost():
  role=request.form.get("job-role")
  company=request.form.get("job-company")
  pack=request.form.get("job-package")
  eligibility=request.form.get("job-eligibility")
  description=request.form.get("job-description")
  url=request.form.get("job-url")
  poster=request.form.get("job-poster")
  post=posts.find_one({'job-url':url})
  print(post)
  if(post):
    print("post already")
    return render_template("jobpostingpage.html")
  posts.insert_one({
    'job-role':role,
    'job-company':company,
    'job-package':pack,
    'job-eligibility':eligibility,
    'job-description':description,
    'job-url':url,
    'job-poster':poster
  })
  return render_template("jobpostingpage.html",status="event added successfully")

@app.route("/mentorship")
def mentorship():
  return render_template("mentorship.html")

@app.route("/mentor", methods=['post'])
def mentor():
  name=request.form.get("name")
  email=request.form.get("email")
  role=request.form.get("role")
  experience=request.form.get("experience")
  expertise=request.form.get("expertise")
  contact_method=request.form.get("contact_method")
  bio=request.form.get("bio")
  linkedin=request.form.get("linkedin")
  cont=request.form.get("contact-number")
  mentor=mentors.find_one({'email':email})
  print(mentor)
  if(mentor):
    print("already have mentorship")
    return render_template("alumlanding.html",status="already have mentorship")
  mentors.insert_one({
    'name':name,
    'email':email,
    'role':role,
    'experience':experience,
    'expertise':expertise,
    'contact_method':contact_method,
    'bio':bio,
    'linkedin':linkedin,
    'contact-number':cont
  })
  return render_template("alumlanding.html",status="mentorship added successfully")

@app.route("/mentordisplay")
def mentordisplay():
  mentorsdata=mentors.find()
  return render_template("mentordisplay.html",medata=mentorsdata)






@app.route('/delete/<event_name>', methods=['GET'])
def delete_event(event_name):
    # Use delete_one to remove the document from the collection
    result = events.delete_one({'event-name': event_name})
    
    # Check if the delete operation was successful
    if result.deleted_count > 0:
        print(f"Deleted event: {event_name}")
    else:
        print(f"Event not found: {event_name}")
        
    return redirect(url_for('eventdisplay')) 


@app.route('/delete_post/<post_name>', methods=['GET'])
def delete_post(post_name):
    print("entered in")
    # Use delete_one to remove the document from the collection
    result = posts.delete_one({'job-url': post_name})
    
    # Check if the delete operation was successful
    if result.deleted_count > 0:
        print(f"Deleted post: {post_name}")
    else:
        print(f"post not found: {post_name}")
        
    return redirect(url_for('postsdisplay')) 




if __name__=="__main__":
  app.run()


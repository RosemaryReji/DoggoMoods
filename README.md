<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# [DoggoMoods] 🎯


## Basic Details
### Team Name: [CodeRed]


### Team Members
- Team Lead: [Rosemary Rejimon] - [College Of Engineering, Poonjar]


### Project Description
DoggoMoods is a web app that uses a Teachable Machine audio model and TensorFlow.js to analyze dog barks in real-time and predict their emotions. It helps owners understand their pets better by displaying the detected mood with animated GIFs—all running directly in the browser.

### The Problem (that doesn't exist)
Solving the age-old mystery: What’s my dog really trying to say with all those barks? DoggoMoods decodes your pup’s emotional bark code—because dogs deserve better translators than just “woof” and “bark.” Now you can finally know if they’re happy, grumpy, or just pretending to be mad! 🐶🎉

### The Solution (that nobody asked for)
Ever wondered what your dog’s barks really mean? Neither did we—until now. DoggoMoods deciphers the emotional chaos behind every woof and howl, turning your pup’s mysterious barks into a full-blown emotional soap opera. Because why just guess, when you can know your dog’s mood in real-time? Totally unnecessary, but totally awesome. 🐕🎤✨

## Technical Details
### Technologies/Components Used
Google Teachable Machine Audio – For training and exporting the bark emotion classification model

TensorFlow.js – For running the machine learning model directly in the browser

JavaScript, HTML, CSS – Frontend UI and logic handling

Web Audio API – For capturing real-time microphone input

Animated GIFs – Visual feedback for detected emotions

### Implementation
For Software:
# Clone the repo
git clone https://github.com/RosemaryReji/DoggoMoods.git

# Navigate to project folder
cd doggomoods



### Project Documentation
For Software:
This project is a client-side web app that requires no backend or installation apart from serving files over HTTP.

Model files are loaded remotely from Google Teachable Machine.

The frontend uses TensorFlow.js and the Teachable Machine audio library to process real-time microphone audio and predict dog bark emotions.

Interactive UI elements allow starting/stopping audio capture and display emotion-specific GIFs based on predictions.

For further details, see docs or contact the maintainer.

# Screenshots (Add at least 3)
screenshot 1
This project is a machine learning model built with Google Teachable Machine to classify dog barks into various emotional states, such as "happy," "sad," and "potential threat." The model was trained on a custom dataset of audio samples and can analyze new barks in real-time, providing a confidence score for each category. It serves as a practical example of using AI for audio classification to interpret animal communication.
<img width="1876" height="863" alt="Screenshot 2025-08-09 153917" src="https://github.com/user-attachments/assets/9ffaba02-2462-4bc5-962f-2f3acf92a798" />


<img width="1888" height="861" alt="Screenshot 2025-08-09 153933" src="https://github.com/user-attachments/assets/218e9cd4-342b-43eb-bdc5-9b1f8d9aea8b" />


here's my app
<img width="1899" height="858" alt="image" src="https://github.com/user-attachments/assets/33e25b0d-4c9c-4a13-8094-c410a82f8293" />
The thing is i had an error with the mic recording 😁😁😁. but this thing and the tech used is going to be starred in various fields
Pet Owners: To better understand their dog's emotions (happy, anxious, etc.), improving communication and pet welfare.

Early Health Alerts: To detect unusual barks that might signal a health problem, prompting a vet visit.

Professional Use: For dog trainers, veterinarians, and security personnel to quickly assess a dog's mood or threat level.

Animal Research: To automate the study of canine communication and behavior.


# Diagrams
Workflow
<img width="693" height="760" alt="image" src="https://github.com/user-attachments/assets/d9809e07-19f8-4d2b-82c2-8c0c347ddf8d" />


For Hardware:
Enjoy because no hardware needed 😉😉

![Final](Add photo of final product here)
*Final Build: Doggomoods - Bark Emotion Analyzer
This project is a web application that uses a machine learning model to analyze and classify dog barks. The goal is to provide a user-friendly interface that can interpret a dog's vocalizations in real-time.

1. The Machine Learning Model (Backend)
The core of this project is a machine learning model built and trained using Google Teachable Machine. As shown in the development screenshots, the model was trained on a custom audio dataset with several key classes:

Background Noise: To filter out irrelevant sounds.

Happy: For playful and excited barks.

Potential Threat: For aggressive or warning barks.

Attention Seeking: For barks meant to get a human's attention.

Sad: For whines and mournful sounds.

Curious: For barks that express interest.

The model was successfully trained with 51 epochs, a setting that helped to optimize its accuracy. The Teachable Machine's "Preview" pane confirms that the model is functional and can provide confidence scores for different audio inputs.

2. The Web Application (Frontend)
The frontend is a web-based user interface designed to interact with the trained model. The screenshot of the web app shows:

A clear title: "Doggomoods - Bark Emotion Analyzer."

A central image of a dog, enhancing the user experience.

A "Start Listening" button, which is the primary control for users to begin the analysis.

A descriptive call to action: "Click 'Start Listening' to begin analyzing bark emotions!"

3. Current Status and Next Steps
While the machine learning model is trained and the user interface is designed, a developer console log indicates there are still some JavaScript errors. These errors, such as ReferenceError: audio is not defined, suggest that the code responsible for loading the Teachable Machine model and processing the live audio input is not yet fully functional.

Next Steps:

Debug the JavaScript code to correctly load the Doggomoods model.

Fix the audio input handling to ensure the "Start Listening" button successfully captures and feeds the audio data to the model.

Display the real-time classification results (e.g., confidence scores) on the user interface for a complete and interactive user experience.

This project represents a solid foundation for a practical AI application, with the core machine learning logic successfully built and a clear path forward for completing the frontend integration.*


---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)




class DoggoMoods {
    constructor() {
        this.model = null;
        this.isListening = false;
        this.recognizer = null;
        
        this.emotionGifMap = {
            'Curious': 'curious.gif',
            'Angry': 'angry.gif',
            'Attention Seeker': 'attention.gif',
            'Excited': 'excited.gif',
            'Happy': 'happy.gif',
            'Sad': 'sad.gif'
        };
        
        this.dogGif = document.getElementById('dogGif');
        this.startBtn = document.getElementById('startBtn');
        this.status = document.getElementById('status');
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => {
            if (this.isListening) {
                this.stopListening();
            } else {
                this.startListening();
            }
        });
    }
    
    async loadModel() {
        try {
            this.updateStatus('Loading AI model...');
            const modelUrl = 'https://teachablemachine.withgoogle.com/models/681dy1Zgr/';
            this.model = await tmSound.create(modelUrl + 'model.json', modelUrl + 'metadata.json');
            console.log('Model loaded successfully!');
            return true;
        } catch (error) {
            console.error('Error loading model:', error);
            this.updateStatus('Error loading AI model. Please try again.');
            return false;
        }
    }
    
    async startListening() {
        if (!this.model) {
            const modelLoaded = await this.loadModel();
            if (!modelLoaded) return;
        }
        
        try {
            this.updateStatus('Starting microphone...');
            
            // Create the recognizer
            this.recognizer = this.model.createRecognizer();
            
            // Add event listener for predictions
            this.recognizer.addEventListener('result', (event) => {
                this.handlePrediction(event.data);
            });
            
            // Start listening
            await this.recognizer.listen();
            
            this.isListening = true;
            this.startBtn.textContent = 'Stop Listening 🛑';
            this.startBtn.classList.add('listening');
            this.status.classList.add('active');
            this.updateStatus('Listening for bark emotions... Woof! 🐕');
            
            console.log('Started listening for dog barks!');
            
        } catch (error) {
            console.error('Error starting microphone:', error);
            this.updateStatus('Error accessing microphone. Please check permissions.');
        }
    }
    
    stopListening() {
        if (this.recognizer) {
            this.recognizer.stopListening();
        }
        
        this.isListening = false;
        this.startBtn.textContent = 'Start Listening 🎤';
        this.startBtn.classList.remove('listening');
        this.status.classList.remove('active');
        this.updateStatus('Stopped listening. Click "Start Listening" to begin again!');
        
        console.log('Stopped listening for dog barks.');
    }
    
    handlePrediction(predictions) {
        // Find the prediction with the highest confidence
        let highestPrediction = predictions[0];
        let highestConfidence = predictions[0].probability;
        
        for (let i = 1; i < predictions.length; i++) {
            if (predictions[i].probability > highestConfidence) {
                highestPrediction = predictions[i];
                highestConfidence = predictions[i].probability;
            }
        }
        
        // Log all predictions for debugging
        console.log('Predictions:', predictions.map(p => 
            `${p.className}: ${(p.probability * 100).toFixed(1)}%`
        ).join(', '));
        
        // Update GIF if confidence is above threshold (20%)
        if (highestConfidence > 0.2) {
            const emotion = highestPrediction.className;
            const gifFile = this.emotionGifMap[emotion];
            
            if (gifFile) {
                console.log(`Detected emotion: ${emotion} (${(highestConfidence * 100).toFixed(1)}%)`);
                this.updateDogGif(gifFile);
                this.updateStatus(`Detected: ${emotion} mood! (${(highestConfidence * 100).toFixed(1)}% confidence) 🐶`);
            }
        }
    }
    
    updateDogGif(gifFile) {
        // Add a subtle transition effect
        this.dogGif.style.opacity = '0.7';
        
        setTimeout(() => {
            this.dogGif.src = gifFile;
            this.dogGif.style.opacity = '1';
        }, 150);
    }
    
    updateStatus(message) {
        this.status.textContent = message;
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.doggoMoods = new DoggoMoods();
    console.log('DoggoMoods initialized! Ready to analyze bark emotions.');
});
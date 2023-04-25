import speech_recognition as sr
import time

# Set up the recognizer and microphone
r = sr.Recognizer()
mic = sr.Microphone()

# # Set up a list of keywords to check for3

# keywords = ["answer key", "Google", "help"]

# Start the timer for the test
start_time = time.time()
test_duration = 30 * 60  # 30 minutes in seconds

# Begin listening for speech
while time.time() - start_time < test_duration:
    with mic as source:
        r.adjust_for_ambient_noise(source)  # Remove ambient noise
        audio = r.listen(source)  # Listen for speech
        
    try:
        # recognize speech using Google Speech Recognition
        text = r.recognize_google(audio)
        print("Warning: Cheating detected.")
        
    except sr.UnknownValueError:
        print("Sorry, I didn't understand that.")
    except sr.RequestError:
        print("Sorry, my speech service is down.")


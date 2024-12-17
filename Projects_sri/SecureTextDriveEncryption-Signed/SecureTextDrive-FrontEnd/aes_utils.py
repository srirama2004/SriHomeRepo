from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
import os
import base64

def generate_aes_key():
    """Generate a random AES key."""
    return os.urandom(32)  # Generates a 256-bit key (32 bytes)

def pad_data(data: bytes) -> bytes:
    """Pad the data to be a multiple of the block size using PKCS#7."""
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    return padder.update(data) + padder.finalize()

def unpad_data(data: bytes) -> bytes:
    """Unpad the data that was padded using PKCS#7."""
    unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
    return unpadder.update(data) + unpadder.finalize()

def aes_encrypt(key: bytes, plaintext: bytes) -> bytes:
    iv = os.urandom(16)
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    padded_plaintext = pad_data(plaintext)
    ciphertext = encryptor.update(padded_plaintext) + encryptor.finalize()
    return iv + ciphertext  # Return as bytes

def aes_decrypt(ciphertext_base64: str, key: bytes) -> str:
    """Decrypts the ciphertext using AES with the provided key."""
    # Decode the base64-encoded data and separate IV from the actual ciphertext
    ciphertext = base64.b64decode(ciphertext_base64)
    iv = ciphertext[:16]  # Extracts the first 16 bytes as IV
    actual_ciphertext = ciphertext[16:]  # The remainder is the ciphertext

    # Set up the AES cipher in CBC mode with the IV
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()

    # Decrypt and remove padding
    padded_data = decryptor.update(actual_ciphertext) + decryptor.finalize()
    decrypted_data = unpad_data(padded_data)

    # Return the decrypted data as a UTF-8 string
    return decrypted_data.decode('utf-8')

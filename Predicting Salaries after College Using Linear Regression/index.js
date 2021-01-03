const SLR = require('ml-regression').SLR;
document.getElementById('hello').innerText = "Using ml-regression";

const Xtrain = [78, 70.06, 70, 74.64, 73.9, 76.32, 72.98, 8.58, 85.03, 78, 74.9, 72.29, 60, 60, 67.67, 63, 64.8, 74.74, 69.54, 76.3, 78.15, 74.01, 76, 55.52, 76, 78, 66.15, 76.44, 72, 68, 77.2, 71, 79.3, 74.3, 70.86, 64.98, 74.1, 63.9, 77.15, 76.4, 60.22, 66, 71, 71.04, 92.1, 79, 74.01, 77, 74, 57.54, 89.7, 57.8, 57.64, 80, 80, 67.7, 68.2, 80.8, 66.9, 55, 70, 85, 65.35, 69.3, 72.13, 70, 76.12, 71.5, 77.55, 70, 76.4, 61.17, 60, 67, 75, 75.84, 87.6, 63.2, 73.5, 78.6, 74.14, 69.38, 76.25, 55, 61, 63.13, 71.1, 62, 70.82, 79.9, 60, 77.38, 66, 66, 61.5, 88.2, 64, 70.12, 77.85, 80.03, 80, 66.7, 65, 70, 63, 72, 69.7, 62.2, 59, 66.96, 69.3, 78.5, 73.46, 70, 67, 78, 64.06, 61.9, 72.7, 77, 77.58, 62, 75.6, 68.63, 67.95, 65.7, 69.88, 61.54, 67, 68, 67.5, 71, 71, 55.33, 74.94, 67, 68.64, 70.12, 6.63, 60, 72.3, 62, 60, 53, 65.02, 59.9, 74, 76.76, 64.46, 84, 64, 63, 65.72, 70.56, 83.5, 60.85, 73.2, 68.5, 75, 78, 72, 58, 64, 63, 78.59, 78.96, 83.9, 65, 77.56, 79.68, 71.44, 74.5, 65, 74.86, 67.2, 74.7, 79, 78, 71.25, 79, 77.5, 76.1, 75.3, 74.96, 67.23, 62.6, 68.16, 93, 72, 75.16, 74.3, 72.8, 74.36, 60, 76.6, 71.67, 72, 75.1, 78.34, 68, 90.24, 80.07, 68.96, 79.3, 82.1, 70.3, 87.8, 85.8, 83.2, 76.67, 67.8, 69.11, 79.75, 68.22, 73, 86.7, 63.5, 65.6, 65.4, 61.9, 76.3, 77, 68.3, 82.73, 71.4, 81.02, 70.32, 84, 71.72, 76, 80.22, 71.4, 61, 72.6, 59, 71.88, 65.01, 76.3, 74, 73.7, 80.95, 65.5, 66.33, 71.02, 72.4, 60.01, 70.51, 77, 73, 69.1, 69, 65, 69.5, 72, 66, 79.9, 68.23, 66, 63, 68.23, 69.43, 73.86, 76, 81, 74.98, 78.44, 77.2, 74.9, 72, 78.4, 77.5, 67, 72, 68.8, 70.6, 73, 80.67, 60, 61, 76.6, 87.8, 76, 81, 79.29, 71.52, 80, 62, 83.93, 63, 65, 71.26, 78, 70, 72, 70.95, 71, 68, 74.15, 71, 82.2, 69.2, 63, 66, 77, 79.12, 74.26, 71.56, 88.2, 74.4, 67.35, 78, 80.14, 71.3, 65.25, 68.4, 70.66, 76.1, 60.64, 76.72, 76.6, 81, 74, 78, 67.82, 52, 90, 76, 60.89, 70.66, 58.86, 77.5, 64.8, 75.39, 74.9, 63.7, 69, 80, 73, 72.59, 62.11, 70.7, 70.1, 78, 72, 83.01, 61, 75.34, 66, 66.7, 85, 87.7, 70.82, 60.62, 78.9, 61, 67.08, 65.68, 81, 71.7, 74, 80, 70, 76, 85.5, 65, 68, 71.6, 65, 76.61, 78.39, 81.1, 70.3, 61, 65, 59.28, 79, 72.22, 65, 70.84, 60.34, 64, 74.48, 55.7, 80, 71.8, 80.2, 68.53, 70, 78.34, 80, 78, 67.75, 67.1, 76.2, 66.49, 76.2, 73.2, 67.2, 62.6, 65.8, 66.2, 88.8, 62.71, 67.8, 79.9, 61.47, 83, 65.5, 73, 70, 76, 62.8, 65.6, 68, 68.66, 70.9, 76, 76.45, 70.02, 72, 77, 63.7, 75.16, 76, 75.64, 77.26, 72, 65.2, 65, 77.05, 72, 71, 67.6, 72, 72, 69.3, 66.8, 75.9, 75.6, 72, 63.96, 81.5, 67, 61.5, 70.13, 81, 60, 67, 66, 75.72, 63, 75.2, 55.9, 81, 74, 67.84, 72, 58, 79, 70, 75.9, 80.35, 80.6, 71.1, 77.8, 63.3, 71.6, 90.3, 81, 65.7, 62, 70, 72.22, 72.04, 82, 70.04, 70.4, 92, 65.6, 67.25, 77.5, 75.83, 58.59, 87.7, 72.5, 74.3, 74, 57.83, 72, 76.92, 64, 85.2, 78.5, 74.7, 81, 69.84, 58.26, 64.21, 72, 83.02, 72, 89.2, 77, 70.82, 81, 69.3, 68.2, 65, 68, 72.6, 76.99, 74, 68, 69, 77.5, 77, 61.73, 76, 76.6, 72, 81, 58, 68.41, 72.32, 79.16, 67, 65, 79.8, 60, 78.16, 70.59, 73.72, 65.87, 84, 73.8, 71.51, 72.3, 66.4, 80, 63, 71, 77, 72, 76.12, 72.14, 70.29, 58, 58.92, 67.3, 74.74, 82.5, 73.98, 78.54, 64.5, 73.92, 80, 84.1, 80.05, 69.4, 86, 86.76, 82.19, 75.2, 55, 80.06, 74.6, 70, 72.14, 71.6, 73.82, 58, 65.84, 71.06, 82.48, 63.4, 73.5, 66, 71.5, 76.05, 57, 85.8, 63, 79.6, 67, 63, 80, 69.56, 70.7, 68.56, 67.86, 79.56, 75.16, 72.09, 75.2, 64, 61.25, 69.64, 79.98, 81.49, 76.67, 88, 64.8, 78.56, 73, 76, 68.3, 81, 77.78, 63, 64.53, 81.2, 88, 65.72, 59, 93.6, 73.6, 74.3, 65.2, 72, 69.19, 68.5, 75.1, 68, 64.97, 69.8, 68, 78.5, 70.3, 66, 85.2, 74, 71.46, 68.62, 75.66, 67.98, 70.08, 60, 76.18, 77.6, 61.18, 77.3, 76, 61.4, 70, 66.2, 75, 62.28, 62.1, 68, 69.4, 75.45, 75.4, 75.96, 90, 68, 89, 69, 68.32, 73.9, 70.85, 65, 65, 63.77, 68.05, 65, 64.61, 81.4, 73.8, 76, 76.56, 75.67, 75.4, 88.2, 84.15, 60, 66.87, 73.8, 80.3, 75, 65.88, 78.2, 68.95, 65.3, 66.24, 66, 83.9, 65.06, 59, 65.58, 70, 99.93, 78, 72.6, 67.34, 69.72, 78.1, 73, 69.32, 75, 64.25, 60.99, 78.07, 63.74, 68.28, 69.78, 70.2, 64.5, 54.75, 75.15, 66.5, 75.2, 60.86, 85, 75, 67.57, 73, 60, 76.2, 63.83, 76.06, 71.2, 70.56, 73, 83, 69.71, 73, 85, 75.8, 76.56, 70.2, 56, 68, 78.56, 55.89, 68.11, 67.84, 70, 57.81, 62, 73.4, 71.7, 68.5, 80.26, 65.57, 70, 67.13, 72, 68, 67.08, 79.9, 85, 60, 81, 74.3, 60, 73.46, 74.27, 64.56, 66.67, 69.8, 62, 70, 57.25, 71, 83.5, 87.4, 73, 71.6, 90, 75.1, 67, 84.4, 66.35, 87, 83.9, 71, 68, 66.03, 75.6, 69, 74.86, 70, 62.93, 78.5, 69.48, 65, 66, 77, 6.8, 72.4, 65.72, 72.39, 84.3, 76.2, 68, 60.12, 66, 88.6, 68.66, 66.6, 70, 71, 70.1, 66.7, 68, 65, 70, 66.34, 71.8, 66.55, 64.95, 72, 69, 84, 58, 70, 74, 67.72, 67, 69.31, 75, 87.5, 75.86, 67.1, 65.4, 73.04, 70.94, 68.52, 63.24, 68.9, 65.02, 71.72, 65.62, 63, 79.98, 68, 67.7, 69.1, 68.8, 73, 78.9, 82, 72.6, 78.7, 80.27, 71, 78, 72.3, 68, 77, 82.9, 88, 73, 68.04, 53.01, 88, 71.14, 65.18, 69.06, 65.89, 69.98, 75, 68.1, 69, 72.3, 78.15, 73.78, 83.86, 67.95, 78.9, 74.53, 73, 69.62, 75, 94.5, 75.65, 86, 77, 55.45, 67, 62, 57, 83, 76, 65.2, 59.6, 73.4, 67.8, 61.51, 61.36, 79, 69.98, 61, 68.65, 75, 80, 84.01, 69.1, 68, 85.7, 72, 67.68, 68, 62, 64, 68.75, 77, 50, 87.9, 57.5, 90.44, 76, 63.8, 65.61, 79.51, 65, 73, 75, 76, 72.5, 68.75, 65, 61.95, 68, 70, 69.29, 77.96, 71.8, 79.1, 58, 77.24, 89.3, 66, 76.7, 70.66, 71.18, 67, 79, 75.27, 69.3, 80.6, 74.5, 80.3, 80.21, 69, 70, 62.9, 64.8, 72, 73.81, 77.8, 80, 79.95, 62.82, 72, 71.82, 71.02, 86.6, 72.4, 70, 91.2, 62.4, 77.75, 59.8, 80, 74.3, 60.08, 77.07, 52, 77, 75, 67.69, 80.8, 78, 64, 81.4, 82.67, 74.3, 74, 69.8, 79.8, 71.65, 68.6, 64.28, 65, 63.5, 78.6, 67.5, 76, 83.63, 72.79, 72.8, 70.64, 54, 62.33, 61.8, 58.43, 82.53, 73.4, 79]
const ytrain = [7855, 7359, 7705, 7614, 8347, 8619, 7356, 1587, 8854, 8013, 8053, 7681, 6988, 6150, 6878, 6433, 6760, 7867, 7078, 8121, 7974, 7705, 8078, 6451, 8157, 8362, 7306, 8167, 7497, 7722, 8353, 7665, 8120, 7613, 7465, 6942, 8030, 6418, 7921, 7926, 6319, 7393, 7592, 7673, 9251, 8066, 7584, 7926, 7476, 6423, 9591, 6688, 6569, 8248, 8976, 7503, 7648, 8972, 7687, 6199, 7715, 8526, 7179, 7806, 7489, 7183, 7805, 7890, 8372, 7445, 7658, 6685, 6564, 7580, 7916, 7827, 9229, 6814, 7842, 8562, 7450, 7013, 8520, 6354, 6942, 6479, 7800, 6761, 7922, 7993, 6464, 7839, 7049, 6629, 7149, 9480, 6675, 7909, 8626, 8585, 8633, 7533, 7174, 7667, 6861, 7636, 7479, 6315, 6667, 6852, 7427, 8523, 8024, 7884, 6719, 8387, 6873, 6990, 7541, 8321, 8721, 7136, 8443, 7591, 7434, 7087, 7141, 6860, 7642, 7672, 7439, 7347, 7876, 5676, 8041, 6872, 7123, 7594, 1318, 6668, 7621, 6960, 6479, 5807, 7354, 6122, 8121, 8226, 7232, 8992, 6509, 6653, 7015, 7245, 8419, 6619, 7334, 7791, 7844, 8591, 7282, 6190, 6866, 6917, 8099, 8247, 8608, 7336, 8270, 8776, 7168, 7890, 6828, 7781, 7502, 7642, 8445, 8126, 7931, 8511, 8546, 8408, 8178, 8235, 7374, 6575, 7005, 10275, 7282, 7519, 8260, 7799, 7453, 6931, 7762, 7737, 8196, 8054, 8589, 7314, 9193, 8943, 7291, 8296, 8339, 7514, 8990, 9378, 9209, 8146, 7003, 7466, 8142, 7108, 7997, 9424, 6682, 7339, 7060, 6438, 8216, 8321, 7352, 9024, 7462, 8402, 7117, 8678, 7725, 7978, 8974, 7621, 6377, 8212, 6410, 7811, 7463, 7677, 8369, 8022, 8867, 6895, 7462, 7630, 7296, 6017, 7380, 8017, 8095, 6949, 7487, 7198, 7122, 7485, 6977, 8693, 7772, 6934, 6918, 7055, 7717, 7996, 8132, 8598, 8006, 7983, 7726, 8320, 7246, 8604, 8018, 7124, 8164, 7259, 7496, 7615, 8893, 6798, 7045, 8557, 9608, 8162, 8918, 8479, 7809, 8498, 6406, 8944, 7284, 7342, 7623, 8758, 7620, 7547, 7276, 7206, 7583, 8109, 7705, 8622, 7484, 6605, 7027, 7891, 8173, 7749, 7375, 9587, 7585, 7227, 8663, 8018, 7924, 6985, 7467, 7250, 7939, 7028, 7747, 8234, 8980, 7615, 8794, 7104, 5605, 9481, 8573, 6998, 7261, 6606, 8232, 6551, 8243, 8274, 6999, 7533, 8125, 7527, 8076, 6972, 7343, 7341, 8349, 7591, 8329, 6721, 8116, 6749, 7493, 9044, 9460, 7342, 6073, 8755, 6959, 7324, 6859, 8177, 7218, 7810, 8948, 7398, 8096, 9374, 6888, 7473, 7228, 7018, 8097, 8811, 8655, 7094, 7015, 6858, 6857, 8709, 7638, 7311, 7880, 7000, 6715, 8224, 6461, 8230, 7268, 8513, 7238, 7641, 8168, 8609, 8268, 7475, 6775, 8018, 7359, 7912, 7789, 7343, 6659, 6680, 7579, 9614, 6959, 7100, 8020, 6807, 8371, 6676, 8070, 7007, 7741, 6617, 6873, 7013, 7310, 7799, 7632, 7722, 7486, 7649, 8282, 6977, 8506, 8532, 8479, 8576, 7533, 7363, 6729, 7883, 7924, 7189, 7125, 7311, 7383, 7056, 6734, 8142, 7674, 7265, 7068, 8187, 7188, 6338, 7645, 8320, 6264, 6717, 6648, 7928, 6782, 7620, 5750, 9035, 7919, 7096, 7249, 6559, 8811, 7977, 8216, 8322, 8563, 7362, 8266, 6397, 7733, 9722, 8330, 6590, 6429, 7547, 8021, 7516, 8480, 7147, 7805, 9299, 7499, 7659, 8131, 8138, 6331, 9037, 8039, 8176, 7549, 5826, 8146, 7725, 7311, 9515, 8823, 8062, 9056, 7180, 6553, 7246, 8127, 8522, 7772, 9200, 7804, 7828, 8681, 7877, 7640, 6892, 7209, 8131, 8401, 8354, 7041, 7155, 8085, 7917, 6472, 8327, 8171, 7692, 8763, 6513, 7104, 7276, 8269, 7494, 7244, 8403, 6730, 8076, 7141, 7811, 7282, 8701, 7577, 7849, 8004, 7091, 8770, 6613, 7498, 8047, 7412, 8597, 7329, 7464, 6522, 6710, 6807, 7786, 9063, 7782, 8810, 6736, 7424, 8984, 8632, 8758, 7623, 9555, 8873, 8573, 7821, 6332, 8555, 7883, 7099, 7811, 7508, 8273, 6115, 7130, 8094, 9153, 6444, 7872, 7583, 7241, 7936, 5855, 9226, 6739, 8024, 6750, 7256, 8925, 7408, 7146, 6867, 7122, 8778, 7899, 7594, 7687, 6711, 6469, 7111, 8511, 8587, 7916, 9614, 6938, 8433, 7418, 7680, 7720, 8104, 8201, 6518, 6630, 8722, 9526, 6744, 6415, 9809, 7788, 7847, 7456, 8064, 7587, 7794, 7947, 6996, 7137, 7616, 7471, 8311, 7353, 7599, 8809, 7823, 7791, 7111, 7984, 7431, 7664, 6765, 8273, 8479, 6752, 7891, 8301, 7128, 7642, 6682, 7739, 6747, 6948, 7231, 7917, 7904, 7857, 8254, 9947, 7219, 9665, 7295, 6846, 8337, 7853, 7410, 7195, 7131, 6954, 7365, 6715, 8821, 7832, 8159, 7999, 8423, 7724, 9040, 8900, 6625, 7103, 7424, 8646, 8105, 6961, 8579, 7275, 6725, 6776, 6615, 8546, 7440, 6406, 6917, 7720, 10866, 8763, 7967, 7349, 7924, 7952, 7767, 7917, 8158, 6954, 7043, 7835, 6786, 7340, 7541, 7473, 6692, 6038, 8140, 7044, 7912, 6757, 9312, 7990, 7211, 7716, 6387, 7704, 6615, 8017, 7836, 7552, 8010, 8402, 7933, 7933, 9167, 8300, 8153, 7409, 5855, 6904, 8321, 6226, 7491, 6983, 7494, 6593, 6617, 8139, 8111, 7441, 8952, 7125, 7381, 7662, 7360, 7187, 7513, 8224, 9376, 6706, 9042, 7980, 6903, 7716, 8323, 6883, 7658, 7786, 6418, 7477, 5906, 7210, 9149, 8932, 7423, 7299, 9598, 7811, 6768, 9336, 7230, 9385, 9025, 7133, 7625, 7488, 7793, 7861, 7900, 7317, 7149, 8374, 6986, 7161, 6903, 7829, 1286, 7881, 6786, 7497, 8767, 8156, 7154, 6980, 6815, 8885, 7285, 7238, 7469, 7399, 7759, 7343, 6835, 7136, 7201, 7470, 7842, 7238, 7351, 7619, 7823, 8408, 6284, 7718, 8230, 7247, 7651, 7177, 7631, 8835, 8006, 7204, 7482, 8107, 7325, 7514, 6975, 7374, 7498, 7752, 7068, 7180, 8407, 6939, 6918, 7880, 7212, 7646, 8827, 8434, 7316, 8713, 8301, 7149, 8212, 7733, 6932, 8152, 8585, 8899, 8205, 7752, 5416, 9137, 7700, 7438, 7812, 7351, 7945, 7557, 7804, 7111, 7497, 8357, 8288, 8757, 7100, 8247, 8299, 8299, 7779, 8014, 9760, 8009, 9268, 8044, 5981, 7458, 7019, 6637, 8966, 8150, 7324, 6657, 7788, 7006, 6893, 7112, 8003, 7973, 7044, 7154, 8197, 8212, 9049, 7767, 7554, 9041, 8010, 7224, 7573, 6251, 6581, 7030, 7725, 5318, 8855, 6297, 9524, 7662, 6779, 6988, 8126, 6675, 7988, 7643, 8532, 7809, 7805, 7207, 7050, 7241, 7460, 7048, 8764, 7692, 8684, 6623, 7843, 9159, 7523, 8370, 7872, 7527, 7494, 8556, 7656, 7046, 8877, 7539, 8749, 8134, 7485, 7427, 6979, 6567, 7267, 7701, 8084, 8503, 8286, 6502, 7809, 7558, 7806, 8725, 7574, 7885, 9405, 6437, 8051, 6234, 8993, 8111, 6999, 8162, 5486, 8058, 8085, 6832, 8692, 8581, 6794, 8818, 8695, 7627, 7881, 7363, 8831, 7879, 7338, 7316, 6644, 6798, 7965, 7069, 7779, 9186, 7865, 7563, 7596, 5953, 6394, 7160, 6577, 8883, 7407, 8126]

// Building our model
const regression = new SLR(Xtrain, ytrain);

console.log(regression.predict(80)); // Apply the model to some x value. Prints 2.6. 
console.log(regression.coefficients); // Prints the coefficients in increasing order of power (from 0 to degree). 
console.log(regression.toString(3)); // Prints a human-readable version of the function. 


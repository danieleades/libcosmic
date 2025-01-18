searchState.loadedDescShard("zune_core", 0, "Core routines shared by all libraries\nImage bit depth, information and manipulations\nA simple implementation of a bytestream reader and writer.\nImage Colorspace information and manipulation utilities.\nDecoder and Encoder Options\nDecoding results for images\nBig Endian byte-order\nThe image bit depth.\nThe underlying bit representation of the image\nByte endianness of returned samples this is useful when …\nU8 bit depth.\nImages represented using a <code>f32</code> as their underlying pixel …\nFloating point 32 bit data, range is 0.0 to 1.0\nLittle Endian byte-order\nU16 bit depth\nImages represented using a <code>u16</code> as their underlying pixel …\nImages represented using a <code>u8</code> as their underlying pixel …\nBit depth information is unknown\nReturn the minimum number of bits that can be used to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet the max value supported by the bit depth\nGet the number of bytes needed to store a specific bit …\nReturn the equivalent of the image bit type’s depth\nAn encapsulation of a byte stream reader\nEncapsulates a simple Byte writer with support for Endian …\nThe underlying reader trait\nReturn number of unwritten bytes in this stream\nDestroy this reader returning the underlying source of the …\nReturn true whether or not we read to the end of the …\nReturn true whether or not we read to the end of the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a part of the bytestream as a reference.\nGet a single byte which is at position <code>index</code>\nGet number of bytes available in the stream\nGet a fixed amount of bytes or return an error if we cant …\nGet a fixed amount of bytes or return a zero array size if …\nGet total length of the underlying buffer.\nGet current position of the buffer.\nGet a slice of bytes from a range of start..end\nRead u16 as a big endian integer Returning 0 if the …\nRead u16 as a big endian integer Returning an error if the …\nRead u16 as a little endian integer Returning 0 if the …\nRead u16 as a little endian integer Returning an error if …\nRead u32 as a big endian integer Returning 0 if the …\nRead u32 as a big endian integer Returning an error if the …\nRead u32 as a little endian integer Returning 0 if the …\nRead u32 as a little endian integer Returning an error if …\nRead u64 as a big endian integer Returning 0 if the …\nRead u64 as a big endian integer Returning an error if the …\nRead u64 as a little endian integer Returning 0 if the …\nRead u64 as a little endian integer Returning an error if …\nRetrieve a byte from the underlying stream returning 0 if …\nRetrieve a byte from the underlying stream returning an …\nReturn whether the underlying buffer has <code>num</code> bytes …\nCheck if the byte writer can support the following write\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn true if the underlying buffer stream is empty\nReturn true if the underlying buffer stream is empty\nGet length of the underlying buffer.\nGet length of the underlying buffer.\nCreate a new instance of the byte stream\nCreate a new bytestream writer Bytes are written from the …\nLook ahead position bytes and return a reference to …\nLook ahead position bytes and return a reference to …\nReturn the number of bytes the writer has written\nRead enough bytes to fill in\nGet number of bytes unread inside this stream.\nReturn the remaining unread bytes in this byte reader\nUndo a buffer read by moving the position pointer <code>num</code> …\nRewind the position of the internal cursor back by <code>by</code> bytes\nSet the cursor position\nSet position for the internal cursor\nSkip <code>num</code> bytes ahead of the stream.\nMove the internal cursor forward some bytes\nSkip bytes until a condition becomes false or the stream …\nWrite bytes from the buf into the bytestream and return …\nWrite all bytes from <code>buf</code> into the bytestream and return …\nWrite u16 as a big endian integer Or don’t write …\nWrite u16 as a big endian integer Returning an error if …\nWrite u16 as a little endian integer Or don’t write …\nWrite u16 as a little endian integer Returning an error if …\nWrite u32 as a big endian integer Or don’t write …\nWrite u32 as a big endian integer Returning an error if …\nWrite u32 as a little endian integer Or don’t write …\nWrite u32 as a little endian integer Returning an error if …\nWrite u64 as a big endian integer Or don’t write …\nWrite u64 as a big endian integer Returning an error if …\nWrite u64 as a little endian integer Or don’t write …\nWrite u64 as a little endian integer Returning an error if …\nWrite a single byte in the stream or don’t write …\nWrite a single byte into the bytestream or error out if …\nEncapsulates all colorspaces supported by the library\nAlpha Red Green Blue\nBlue, Green, Red\nBlue, Green, Red, Alpha\nCyan , Magenta, Yellow, Black\nColor characteristics\nAll possible image colorspaces Some of them aren’t yet …\nHue,Saturation,Lightness Conversion from RGB to HSL and …\nHue, Saturation,Value\nLinear transfer characteristics The image is in linear …\nGrayscale colorspace\nGrayscale with alpha colorspace\nRed, Green , Blue\nRed, Green, Blue, Alpha\nThe colorspace is unknown\nYUV colorspace\nReturns the position of the alpha pixel in a pixel\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNumber of color channels present for a certain colorspace\nNormal default gamma setting The float contains gamma …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDecoder options\nOptions shared by some of the encoders in the <code>zune-</code> family …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the byte endian for which samples that span more than …\nGet the colorspace for which the image will be encoded in\nGet the depth for which the image will be encoded in\nGet height for which the image will be encoded in\nGet maximum height configured for which the decoder should …\nGet maximum width configured for which the decoder should …\nReturn number of threads configured for multithreading …\nGet the quality for which the image will be encoded with\nReturn true whether the decoder should be in strict mode …\nReturn true if the decoder should use unsafe routines …\nGet the width for which the image will be encoded in\nWhether the inflate decoder should confirm adler checksums\nGet default inflate limit for which the decoder will not …\nSet whether the inflate decoder should confirm adler …\nSet the default inflate limit for which decompressors …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether the jpeg encoder should encode the image in …\nGet maximum scans for which the jpeg decoder should not go …\nGet expected output colorspace set by the user for which …\nWhether the jpeg encoder should optimize huffman tables to …\nSet maximum scans for which the jpeg decoder should not …\nSet expected colorspace for which the jpeg output is …\nReturn whether <code>zune-image</code> should decode animated images or …\nSet  whether <code>zune-image</code> should decode animated images or …\nCreate  new encode options\nCreate the decoder options with the following …\nCreate the decoder with options setting the configurable …\nCreate the decoder with options  setting most configurable …\nReturn whether <code>zune-image</code> should decode animated images or …\nReturn true whether the png decoder should add an alpha …\nWhether the inflate decoder should confirm crc 32 checksums\nReturn a boolean indicating whether the png decoder should …\nSet whether the png decoder should add an alpha channel to …\nSet whether the png decoder should confirm CRC 32 checksums\nSet  whether <code>zune-image</code> should decode animated images or …\nWhether the png decoder should reduce 16 bit images to 8 …\nSet the byte endian for which raw samples will be stored in\nSet colorspace for the image to be encoded\nSet depth for the image to be encoded\nSet height for the image to be encoded\nSet whether the jpeg encoder should encode the imagei in …\nSet maximum height for which the decoder should not try …\nSet maximum width for which the decoder should not try …\nSet the number of threads allowed for multithreaded …\nSet quality of the image to be encoded\nSet whether the decoder should be in standards conforming/ …\nSet whether the encoder should remove metadata from the …\nWhether the routines can use unsafe platform specific …\nSet width for the image to be encoded\nWhether or not the encoder should remove metadata from the …\nUse AVX paths where possible\nUse avx2 paths where possible\nUse SSE 2 code paths where possible\nUse SSE 3 paths where possible\nUse SSE4 paths where possible\nA simple enum that can hold decode results of most images\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturn the contents if the enum stores <code>Vec&lt;u16&gt;</code> or …\nReturn the contents if the enum stores <code>Vec&lt;u8&gt;</code> or otherwise")
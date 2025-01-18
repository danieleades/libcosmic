searchState.loadedDescShard("nix", 0, "Rust friendly bindings to the various *nix system …\nContains the error value\nNix’s main error type.\nCommon trait used to represent file system paths by many …\nContains the success value\nNix Result Type\nCreate a buffer large enough for storing some control …\nFeature tests for OS functionality\nIs the path empty?\nLength of the path in bytes\nMostly platform-specific functionality\nSafe wrappers around functions found in libc “unistd.h”…\nExecute a function with this path as a <code>CStr</code>.\nThe sentinel value indicates that a function failed and …\nReturns the platform-specific value of errno\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns <code>Ok(value)</code> if it does not contain the sentinel …\nCheck if the OS supports atomic close-on-exec for sockets\nOperating system signals.\nSocket interface functions\nVectored I/O\nGet system identification\nThese constants specify the protocol family to be used in …\nInterface to kernel crypto API\nSocket address for the Linux kernel crypto API\nSet the length of associated authentication data (AAD) …\nSet IV for <code>AF_ALG</code> crypto API.\nSet crypto operation for <code>AF_ALG</code> crypto API. It may be one …\nAppleTalk\nAccess to raw ATM PVCs\nAccess to ATM Switched Virtual Circuits\nAmateur radio AX.25 protocol\nBluetooth low-level socket protocol\nFurther receptions and transmissions will be disallowed.\nCan’t be used for creating sockets; mostly used for …\nEricsson’s Communication CPU to Application CPU …\nController Area Network automotive bus protocol\nA type-safe zero-copy wrapper around a single control …\nA type-safe wrapper around a single control message, as …\nSupports datagrams (connectionless, unreliable messages of …\nDECet protocol sockets.\nAcorn Econet protocol\nNon-DIX type protocol number defined for the Ethernet IEEE …\nRepresents a socket option that can be retrieved.\nInfiniBand native addressing\nIEEE 802.15.4 WPAN (wireless personal area network) raw …\nIPv4 Internet protocols (see <code>ip(7)</code>)\nIPv6 Internet protocols (see <code>ipv6(7)</code>)\nIPX - Novell protocols\nSocket interface over IrDA\nNew “modular ISDN” driver interface protocol\nIUCV (inter-user communication vehicle) z/VM protocol for …\nKey management protocol.\nLogical link control (IEEE 802.2 LLC) protocol\nSet the <code>close-on-exec</code> flag for the file descriptor …\nReceive flags: Control Data was discarded (buffer too …\nEnables nonblocking operation; if the operation would …\nTerminates a record (when this notion is supported, as for …\nThis flag specifies that queued errors should be received …\nRequests not to send <code>SIGPIPE</code> errors when the other end …\nSends or requests out-of-band data on sockets that support …\nPeeks at an incoming message. The data is treated as …\nFor raw (<code>Packet</code>), Internet datagram (since Linux …\nReceive operation blocks until the full amount of data can …\nMultiprotocol Label Switching\nFlags for send/recv and their relatives\nPreallocated structures needed for <code>recvmmsg</code> and <code>sendmmsg</code> …\nIterator over results of <code>recvmmsg</code>/<code>sendmmsg</code>\nReserved for “802.2LLC project”; never used.\nAX.25 packet layer protocol. (see netrom(4))\nKernel user interface device (see <code>netlink(7)</code>)\nAddress for the Linux kernel user interface device.\nAuditing (ref)\nNetlink interface to request information about ciphers …\nDECnet routing messages (ref)\nAccess to FIB lookup from user space (ref)\nTransport IPv6 packets from netfilter to user space.  Used …\nOpen-iSCSI (ref)\nKernel messages to user space (ref)\nNetfilter subsystem (ref)\nInfiniband RDMA (ref)\nReceives routing and link updates and may be used to …\nSCSI Transports (ref)\nSELinux event notifications. (ref)\nQuery information about sockets of various protocol …\nReserved for user-mode socket protocols (ref)\nNear field communication\nLow level packet interface (see <code>packet(7)</code>)\nNokia cellular modem IPC/RPC interface\nGeneric PPP transport layer, for setting up L2 tunnels …\nProvides raw network protocol access.\nRaw sockets (raw(7))\nProvides a reliable datagram layer that does not guarantee …\nReliable Datagram Sockets (RDS) protocol\nFurther receptions will be disallowed.\nContains outcome of sending or receiving a message\nRATS (Radio Amateur Telecommunications Society) Open …\nRx, Andrew File System remote procedure call protocol\nSO_RXQ_OVFL indicates that an unsigned 32 bit value …\nSO_RXQ_OVFL indicates that an unsigned 32 bit value …\nSet close-on-exec on the new descriptor\nSet non-blocking mode on the new socket\nReport hardware timestamps as generated by …\nCollect receiving timestamps as reported by hardware\nCollect receiving timestamps as reported by software\nReport any software timestamps when available.\nCollect transmiting timestamps as reported by hardware\nCollect transmiting timestamps as reported by software\nReceived version of <code>ControlMessage::ScmCredentials</code>\nA message of type <code>SCM_CREDENTIALS</code>, containing the pid, uid …\nReceived version of <code>ControlMessage::ScmRights</code>\nA message of type <code>SCM_RIGHTS</code>, containing an array of file …\nA message of type <code>SCM_TIMESTAMP</code>, containing the time the …\nNanoseconds resolution timestamp\nA set of nanosecond resolution timestamps\nThis was a short-lived (between Linux 2.1.30 and …\nProvides a sequenced, reliable, two-way connection- based …\nRepresents a socket option that can be set.\nIBM SNA\nRepresents a socket address\nAdditional socket options\nConstants used in <code>socket</code> and <code>socketpair</code> to specify the …\nThese constants are used to specify the communication …\nAnything that, in C, can be cast back and forth to <code>sockaddr</code>…\nA container for any sockaddr type\nProvides sequenced, reliable, two-way, connection- based …\nTCP protocol (ip(7))\nConfiguration flags for <code>SO_TIMESTAMPING</code> interface\nFor representing packet timestamps via <code>SO_TIMESTAMPING</code> …\nTIPC, “cluster domain sockets” protocol\nConfigure the transmission time of packets.\nUDP protocol (ip(7))\nLocal communication (see <code>unix(7)</code>)\nA wrapper around <code>sockaddr_un</code>.\nUnix credentials of the sending process.\nUnspecified address family, (see <code>getaddrinfo(3)</code>)\nVMWare VSockets protocol for hypervisor-guest interaction.\nSocket address for VMWare VSockets protocol\nLegacy protocol for wide area network (WAN) connectivity …\nFurther  transmissions will be disallowed.\nITU-T X.25 / ISO-8208 protocol (see <code>x25(7)</code>)\nAccept a connection on a socket\nAccept a connection on a socket\nReturn the socket’s cipher name, for example <code>sha1</code>.\nReturn the socket’s cipher type, for example <code>hash</code> or <code>aead</code>…\nReturns the set containing all flags.\nReturns the set containing all flags.\nReturns the set containing all flags.\nIf this address represents an abstract socket, return its …\nSafely and falliably downcast to an immutable reference\nSafely and falliably downcast to a mutable reference\nConversion from nix’s SockAddr type to the underlying …\nReturns a mutable pointer to the raw <code>sockaddr_un</code> struct\nSafely and falliably downcast to an immutable reference\nSafely and falliably downcast to a mutable reference\nReturns a raw pointer to the inner structure.  Useful for …\nReturns a raw pointer to the inner structure.  Useful for …\nReturns a pointer to the raw <code>sockaddr_un</code> struct\nDowncast to an immutable <code>[UnixAddr]</code> reference.\nDowncast to a mutable <code>[UnixAddr]</code> reference.\nSafely and falliably downcast to an immutable reference\nSafely and falliably downcast to a mutable reference\nBind a name to a socket\nReturns the intersection between the two sets of flags.\nReturns the intersection between the two sets of flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nDisables all flags disabled in the set.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nReturns the union of the two sets of flags.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nAdds the set of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the raw value of the flags currently stored.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nReturns the left flags, but with all the right flags …\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nToggles the set of flags.\nToggles the set of flags.\nContext Identifier (CID)\nIterate over the valid control messages pointed to by this …\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nInitiate a connection on a socket\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns an empty set of flags.\nReturns an empty set of flags.\nReturn the address family of this socket\nReturn the address family of this socket\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nConvert from underlying bit representation, preserving all …\nConvert from underlying bit representation, preserving all …\nCreate a new <code>AddressFamily</code> from an integer value retrieved …\nUnsafe constructor from a variable length source\nLook up the value of this socket option on the given …\nGet the address of the peer connected to the socket <code>fd</code>.\nGet the current address to which the socket <code>fd</code> is bound.\nGet the current value for the requested socket option\nReturns the group identifier\nReturn the socket’s multicast groups mask\nhardware based timestamp\nlegacy timestamp, usually empty\nInserts the specified flags in-place.\nInserts the specified flags in-place.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns the intersection between the flags in <code>self</code> and …\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIterate over the filled io slices pointed by this msghdr\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nReturns <code>true</code> if no flags are currently stored.\nReturns <code>true</code> if no flags are currently stored.\nCheck if this address is an “unnamed” unix socket …\nReturn the length of valid data in the sockaddr structure.\nReturn the length of valid data in the sockaddr structure.\nListen for connections on a socket\nCreate a new sockaddr_un representing a filesystem path.\nConstruct a new socket address from its port ID and …\nConstruct an <code>AF_ALG</code> socket from its cipher name and type.\nConstruct a <code>VsockAddr</code> from its raw fields.\nCreates a new instance with the credentials of the current …\nCreate a new <code>sockaddr_un</code> representing an address in the “…\nCreate a new <code>sockaddr_un</code> representing an “unnamed” …\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nReturns the complement of this set of flags.\nIf this address represents a filesystem path, return that …\nReturns the addrlen of this socket - …\nReturn the socket’s port ID.\nReturns the process identifier\nPort number\nPreallocate structure used by <code>recvmmsg</code> and <code>sendmmsg</code> takes …\nReceive data from a connection-oriented socket. Returns …\nReceive data from a connectionless or connection-oriented …\nAn extension of recvmsg that allows the caller to receive …\nReceive message in scatter-gather vectors from a socket, …\nRemoves the specified flags in-place.\nRemoves the specified flags in-place.\nRemoves the specified flags in-place.\nSend data to a connection-oriented socket. Returns the …\nAn extension of <code>sendmsg</code> that allows the caller to transmit …\nSend data in scatter-gather vectors to a socket, possibly …\nSend a message to a socket\nSet the value of this socket option on the given socket.\nInserts or removes the specified flags depending on the …\nInserts or removes the specified flags depending on the …\nInserts or removes the specified flags depending on the …\nSets the value for the requested socket option\nShut down part of a full-duplex connection.\nReturn the available space in the structure\nReturn the available space in the structure\nReturn the appropriate <code>SockAddr</code> type from a …\nCreate an endpoint for communication\nCreate a pair of connected sockets\nSocket options as used by <code>setsockopt</code> and <code>getsockopt</code>.\nReturns the set difference of the two sets of flags.\nReturns the set difference of the two sets of flags.\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nDisables all flags enabled in the set.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nReturns the symmetric difference between the flags in <code>self</code> …\nReturns the symmetric difference between the flags in <code>self</code> …\nsoftware based timestamp, usually one containing data\nToggles the specified flags in-place.\nToggles the specified flags in-place.\nToggles the specified flags in-place.\nReturns the user identifier\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nReturns a value indicating whether or not this socket has …\nBind this socket to a particular device like “eth0”.\nSet or get the broadcast flag.\nSet or get the don’t route flag.\nFetch the current system-estimated Path MTU.\nEnable extended reliable error message passing.\nSet or retrieve the current time-to-live field that is …\nSet “don’t fragment packet” flag on the IPv6 packet.\nControl receiving of asynchronous error options.\nSet the unicast hop limit for the socket.\nEnable sending of keep-alive messages on …\nWhen enabled,  a close(2) or shutdown(2) will not return …\nSet the mark for each packet sent through this socket …\nIf this option is enabled, out-of-band data is directly …\nEnable or disable the receiving of the <code>SCM_CREDENTIALS</code> …\nReturn the credentials of the foreign process connected to …\nSets or gets the maximum socket receive buffer in bytes.\nUsing this socket option, a privileged (<code>CAP_NET_ADMIN</code>) …\nSpecify the receiving timeout until reporting an error.\nEnable or disable the receiving of the <code>SO_TIMESTAMP</code> …\nEnable or disable the receiving of the <code>SO_TIMESTAMPNS</code> …\nEnables local address reuse\nPermits multiple AF_INET or AF_INET6 sockets to be bound …\nIndicates that an unsigned 32-bit value ancillary message …\nSpecify the sending timeout until reporting an error.\nSets or gets the maximum socket send buffer in bytes.\nUsing this socket option, a privileged (<code>CAP_NET_ADMIN</code>)  …\nGets the socket type as an integer.\nGet and clear the pending socket error.\nThe maximum segment size for outgoing TCP packets.\nSpecifies exact type of timestamping information collected …\nConfigures the behavior of time-based transmission of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSystem info structure returned by <code>sysinfo</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the load average tuple.\nCurrent number of processes.\nReturns the total amount of installed RAM in Bytes.\nReturns the amount of completely unused RAM in Bytes.\nReturns the amount of unused swap memory in Bytes.\nReturns the amount of swap memory in Bytes.\nReturns system information.\nReturns the time since system boot.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMakes a new <code>TimeSpec</code> with given number of microseconds.\nMakes a new <code>TimeVal</code> with given number of microseconds.\nMakes a new <code>TimeSpec</code> with given number of nanoseconds.\nMakes a new <code>TimeVal</code> with given number of nanoseconds.  …\nConstruct a new <code>TimeSpec</code> from its components\nConstruct a new <code>TimeVal</code> from its components\nA vector of buffers.\nA slice of memory in a remote process, starting at address …\nView the <code>IoVec</code> as a Rust slice.\nThe starting address of this slice (<code>iov_base</code>).\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate an <code>IoVec</code> from a mutable Rust slice.\nCreate an <code>IoVec</code> from a Rust slice.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe number of bytes in this slice (<code>iov_len</code>).\nLow-level read from a file, with specified offset.\nRead from <code>fd</code> at <code>offset</code> filling buffers in <code>iov</code>.\nLow-level write to a file, with specified offset.\nWrite to <code>fd</code> at <code>offset</code> from buffers in <code>iov</code>.\nLow-level vectored read from a raw file descriptor\nLow-level vectored write to a raw file descriptor\nDescribes the running system.  Return type of <code>uname</code>.\nNIS or YP domain name of this machine.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMachine hardware platform.\nNetwork name of this machine.\nRelease level of the operating system.\nName of the operating system implementation.\nGet system identification\nVersion level of the operating system.\nMaximum number of I/O operations in a single list I/O call …\nMaximum number of outstanding asynchronous I/O operations …\nThe maximum amount by which a process can decrease its …\nMaximum length of argument to the exec functions including …\nMaximum number of functions that may be registered with …\nMaximum obase values allowed by the bc utility.\nMaximum number of elements permitted in an array by the bc …\nMaximum scale value allowed by the bc utility.\nMaximum length of a string constant accepted by the bc …\nMaximum number of simultaneous processes per real user ID.\nMaximum number of weights that can be assigned to an entry …\nMaximum number of timer expiration overruns.\nMaximum number of expressions that can be nested within …\nInitial size of <code>getgrgid_r</code> and <code>getgrnam_r</code> data buffers\nInitial size of <code>getpwuid_r</code> and <code>getpwnam_r</code> data buffers\nGroup identifier\nRepresentation of a Group, based on <code>libc::group</code>\nMaximum length of a host name (not including the …\nMaximum number of iovec structures that one process has …\nUnless otherwise noted, the maximum length, in bytes, of a …\nMaximum length of a login name.\nThe maximum number of open message queue descriptors a …\nThe maximum number of message priorities supported by the …\nMaximum number of simultaneous supplementary group IDs per …\nA value one greater than the maximum value that the system …\nThe size of a system page in bytes.\nConstant for UID = 0\nReal, effective and saved group IDs.\nReal, effective and saved user IDs.\nVariable names for <code>sysconf</code>\nUser identifier\nRepresentation of a User, based on <code>libc::passwd</code>\nThe number of currently available pages of physical memory.\nThe number of processors configured.\nThe number of processors currently online (available).\nThe number of pages of physical memory. Note that it is …\nThe implementation supports the Terminal Characteristics …\nThe implementation supports the C-Language Binding option.\nThe implementation supports the C-Language Development …\nThe implementation supports the FORTRAN Development …\nThe implementation supports the FORTRAN Runtime Utilities …\nThe implementation supports the creation of locales by the …\nThe implementation supports the Batch Environment Services …\nThe implementation supports the Batch Accounting option.\nThe implementation supports the Batch Checkpoint/Restart …\nThe implementation supports the Locate Batch Job Request …\nThe implementation supports the Batch Job Message Request …\nThe implementation supports the Track Batch Job Request …\nThe implementation supports the Software Development …\nThe implementation supports the User Portability Utilities …\nInteger value indicating version of the Shell and …\nThe implementation supports the Advisory Information …\nThe implementation supports asynchronous input and output.\nThe implementation supports barriers.\nThe implementation supports clock selection.\nThe implementation supports the Process CPU-Time Clocks …\nThe implementation supports the File Synchronization …\nThe implementation supports the IPv6 option.\nThe implementation supports job control.\nThe implementation supports memory mapped Files.\nThe implementation supports the Process Memory Locking …\nThe implementation supports the Range Memory Locking …\nThe implementation supports memory protection.\nThe implementation supports the Message Passing option.\nThe implementation supports the Monotonic Clock option.\nThe implementation supports the Prioritized Input and …\nThe implementation supports the Process Scheduling option.\nThe implementation supports the Raw Sockets option.\nThe implementation supports read-write locks.\nThe implementation supports realtime signals.\nThe implementation supports the Regular Expression …\nEach process has a saved set-user-ID and a saved …\nThe implementation supports semaphores.\nThe implementation supports the Shared Memory Objects …\nThe implementation supports the POSIX shell.\nThe implementation supports the Spawn option.\nThe implementation supports spin locks.\nThe implementation supports the Process Sporadic Server …\nThe implementation supports the Synchronized Input and …\nThe implementation supports threads.\nThe implementation supports the Thread Stack Address …\nThe implementation supports the Thread Stack Size …\nThe implementation supports the Thread CPU-Time Clocks …\nThe implementation supports the Thread Execution …\nThe implementation supports the Non-Robust Mutex Priority …\nThe implementation supports the Non-Robust Mutex Priority …\nThe implementation supports the Thread Process-Shared …\nThe implementation supports the Robust Mutex Priority …\nThe implementation supports the Robust Mutex Priority …\nThe implementation supports thread-safe functions.\nThe implementation supports the Thread Sporadic Server …\nThe implementation supports timeouts.\nThe implementation supports timers.\nThe implementation supports the Trace option.\nThe implementation supports the Trace Event Filter option.\nThe implementation supports the Trace Inherit option.\nThe implementation supports the Trace Log option.\nThe implementation supports the Typed Memory Objects …\nThe implementation provides a C-language compilation …\nThe implementation provides a C-language compilation …\nThe implementation provides a C-language compilation …\nThe implementation provides a C-language compilation …\nInteger value indicating version of this standard …\nThe implementation supports the X/Open Encryption Option …\nThe implementation supports the Issue 4, Version 2 Enhanced\nThe implementation supports the X/Open Realtime Option …\nThe implementation supports the X/Open Realtime Threads …\nThe implementation supports the Issue 4, Version 2 Shared …\nThe implementation supports the XSI STREAMS Option Group.\nThe implementation supports the XSI option\nInteger value indicating version of the X/Open Portability …\nGet the raw <code>uid_t</code> wrapped by <code>self</code>.\nGet the raw <code>gid_t</code> wrapped by <code>self</code>.\nClose a raw file descriptor\nReturns Uid of calling process. This is practically a more …\nReturns Gid of calling process. This is practically a more …\nHome directory\nReturns effective Uid of calling process. This is …\nReturns effective Gid of calling process. This is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a group by GID.\nGet a user by name.\nGet a group by name.\nCreates <code>Uid</code> from raw <code>uid_t</code>.\nCreates <code>Gid</code> from raw <code>gid_t</code>.\nGet a user by UID.\nUser information\nGet the effective group ID\nGet the effective user ID\nGet the real group ID\nCalculate the supplementary group access list.\nGet the list of supplementary group IDs of the calling …\nGets the real, effective, and saved group IDs.\nGets the real, effective, and saved user IDs.\nGet a real user ID\nGroup ID\nGroup ID\nInitialize the supplementary group access list.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the <code>Uid</code> represents privileged user - root. …\nList of Group members\nUsername\nGroup name\nUser password (probably hashed)\nGroup password\nCreate an interprocess channel.\nRead from a raw file descriptor.\nSet the effective group ID\nSet the effective user ID\nSet the group ID\nSet the list of supplementary group IDs for the calling …\nSets the real, effective, and saved gid. (see setresuid(2))\nSets the real, effective, and saved uid. (see setresuid(2))\nSet the user ID\nPath to shell\nSuspend execution for an interval of time\nGet configurable system variables (see sysconf(3))\nUser ID\nWrite to a raw file descriptor.")
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 507:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeFsHandler = exports.EVENTS = exports.isIBMi = exports.isFreeBSD = exports.isLinux = exports.isMacos = exports.isWindows = exports.IDENTITY_FN = exports.EMPTY_FN = exports.STR_CLOSE = exports.STR_END = exports.STR_DATA = void 0;
const fs_1 = __nccwpck_require__(896);
const promises_1 = __nccwpck_require__(943);
const sysPath = __nccwpck_require__(928);
const os_1 = __nccwpck_require__(857);
exports.STR_DATA = 'data';
exports.STR_END = 'end';
exports.STR_CLOSE = 'close';
const EMPTY_FN = () => { };
exports.EMPTY_FN = EMPTY_FN;
const IDENTITY_FN = (val) => val;
exports.IDENTITY_FN = IDENTITY_FN;
const pl = process.platform;
exports.isWindows = pl === 'win32';
exports.isMacos = pl === 'darwin';
exports.isLinux = pl === 'linux';
exports.isFreeBSD = pl === 'freebsd';
exports.isIBMi = (0, os_1.type)() === 'OS400';
exports.EVENTS = {
    ALL: 'all',
    READY: 'ready',
    ADD: 'add',
    CHANGE: 'change',
    ADD_DIR: 'addDir',
    UNLINK: 'unlink',
    UNLINK_DIR: 'unlinkDir',
    RAW: 'raw',
    ERROR: 'error',
};
const EV = exports.EVENTS;
const THROTTLE_MODE_WATCH = 'watch';
const statMethods = { lstat: promises_1.lstat, stat: promises_1.stat };
const KEY_LISTENERS = 'listeners';
const KEY_ERR = 'errHandlers';
const KEY_RAW = 'rawEmitters';
const HANDLER_KEYS = [KEY_LISTENERS, KEY_ERR, KEY_RAW];
// prettier-ignore
const binaryExtensions = new Set([
    '3dm', '3ds', '3g2', '3gp', '7z', 'a', 'aac', 'adp', 'afdesign', 'afphoto', 'afpub', 'ai',
    'aif', 'aiff', 'alz', 'ape', 'apk', 'appimage', 'ar', 'arj', 'asf', 'au', 'avi',
    'bak', 'baml', 'bh', 'bin', 'bk', 'bmp', 'btif', 'bz2', 'bzip2',
    'cab', 'caf', 'cgm', 'class', 'cmx', 'cpio', 'cr2', 'cur', 'dat', 'dcm', 'deb', 'dex', 'djvu',
    'dll', 'dmg', 'dng', 'doc', 'docm', 'docx', 'dot', 'dotm', 'dra', 'DS_Store', 'dsk', 'dts',
    'dtshd', 'dvb', 'dwg', 'dxf',
    'ecelp4800', 'ecelp7470', 'ecelp9600', 'egg', 'eol', 'eot', 'epub', 'exe',
    'f4v', 'fbs', 'fh', 'fla', 'flac', 'flatpak', 'fli', 'flv', 'fpx', 'fst', 'fvt',
    'g3', 'gh', 'gif', 'graffle', 'gz', 'gzip',
    'h261', 'h263', 'h264', 'icns', 'ico', 'ief', 'img', 'ipa', 'iso',
    'jar', 'jpeg', 'jpg', 'jpgv', 'jpm', 'jxr', 'key', 'ktx',
    'lha', 'lib', 'lvp', 'lz', 'lzh', 'lzma', 'lzo',
    'm3u', 'm4a', 'm4v', 'mar', 'mdi', 'mht', 'mid', 'midi', 'mj2', 'mka', 'mkv', 'mmr', 'mng',
    'mobi', 'mov', 'movie', 'mp3',
    'mp4', 'mp4a', 'mpeg', 'mpg', 'mpga', 'mxu',
    'nef', 'npx', 'numbers', 'nupkg',
    'o', 'odp', 'ods', 'odt', 'oga', 'ogg', 'ogv', 'otf', 'ott',
    'pages', 'pbm', 'pcx', 'pdb', 'pdf', 'pea', 'pgm', 'pic', 'png', 'pnm', 'pot', 'potm',
    'potx', 'ppa', 'ppam',
    'ppm', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx', 'psd', 'pya', 'pyc', 'pyo', 'pyv',
    'qt',
    'rar', 'ras', 'raw', 'resources', 'rgb', 'rip', 'rlc', 'rmf', 'rmvb', 'rpm', 'rtf', 'rz',
    's3m', 's7z', 'scpt', 'sgi', 'shar', 'snap', 'sil', 'sketch', 'slk', 'smv', 'snk', 'so',
    'stl', 'suo', 'sub', 'swf',
    'tar', 'tbz', 'tbz2', 'tga', 'tgz', 'thmx', 'tif', 'tiff', 'tlz', 'ttc', 'ttf', 'txz',
    'udf', 'uvh', 'uvi', 'uvm', 'uvp', 'uvs', 'uvu',
    'viv', 'vob',
    'war', 'wav', 'wax', 'wbmp', 'wdp', 'weba', 'webm', 'webp', 'whl', 'wim', 'wm', 'wma',
    'wmv', 'wmx', 'woff', 'woff2', 'wrm', 'wvx',
    'xbm', 'xif', 'xla', 'xlam', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlt', 'xltm', 'xltx', 'xm',
    'xmind', 'xpi', 'xpm', 'xwd', 'xz',
    'z', 'zip', 'zipx',
]);
const isBinaryPath = (filePath) => binaryExtensions.has(sysPath.extname(filePath).slice(1).toLowerCase());
// TODO: emit errors properly. Example: EMFILE on Macos.
const foreach = (val, fn) => {
    if (val instanceof Set) {
        val.forEach(fn);
    }
    else {
        fn(val);
    }
};
const addAndConvert = (main, prop, item) => {
    let container = main[prop];
    if (!(container instanceof Set)) {
        main[prop] = container = new Set([container]);
    }
    container.add(item);
};
const clearItem = (cont) => (key) => {
    const set = cont[key];
    if (set instanceof Set) {
        set.clear();
    }
    else {
        delete cont[key];
    }
};
const delFromSet = (main, prop, item) => {
    const container = main[prop];
    if (container instanceof Set) {
        container.delete(item);
    }
    else if (container === item) {
        delete main[prop];
    }
};
const isEmptySet = (val) => (val instanceof Set ? val.size === 0 : !val);
const FsWatchInstances = new Map();
/**
 * Instantiates the fs_watch interface
 * @param path to be watched
 * @param options to be passed to fs_watch
 * @param listener main event handler
 * @param errHandler emits info about errors
 * @param emitRaw emits raw event data
 * @returns {NativeFsWatcher}
 */
function createFsWatchInstance(path, options, listener, errHandler, emitRaw) {
    const handleEvent = (rawEvent, evPath) => {
        listener(path);
        emitRaw(rawEvent, evPath, { watchedPath: path });
        // emit based on events occurring for files from a directory's watcher in
        // case the file's watcher misses it (and rely on throttling to de-dupe)
        if (evPath && path !== evPath) {
            fsWatchBroadcast(sysPath.resolve(path, evPath), KEY_LISTENERS, sysPath.join(path, evPath));
        }
    };
    try {
        return (0, fs_1.watch)(path, {
            persistent: options.persistent,
        }, handleEvent);
    }
    catch (error) {
        errHandler(error);
        return undefined;
    }
}
/**
 * Helper for passing fs_watch event data to a collection of listeners
 * @param fullPath absolute path bound to fs_watch instance
 */
const fsWatchBroadcast = (fullPath, listenerType, val1, val2, val3) => {
    const cont = FsWatchInstances.get(fullPath);
    if (!cont)
        return;
    foreach(cont[listenerType], (listener) => {
        listener(val1, val2, val3);
    });
};
/**
 * Instantiates the fs_watch interface or binds listeners
 * to an existing one covering the same file system entry
 * @param path
 * @param fullPath absolute path
 * @param options to be passed to fs_watch
 * @param handlers container for event listener functions
 */
const setFsWatchListener = (path, fullPath, options, handlers) => {
    const { listener, errHandler, rawEmitter } = handlers;
    let cont = FsWatchInstances.get(fullPath);
    let watcher;
    if (!options.persistent) {
        watcher = createFsWatchInstance(path, options, listener, errHandler, rawEmitter);
        if (!watcher)
            return;
        return watcher.close.bind(watcher);
    }
    if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_ERR, errHandler);
        addAndConvert(cont, KEY_RAW, rawEmitter);
    }
    else {
        watcher = createFsWatchInstance(path, options, fsWatchBroadcast.bind(null, fullPath, KEY_LISTENERS), errHandler, // no need to use broadcast here
        fsWatchBroadcast.bind(null, fullPath, KEY_RAW));
        if (!watcher)
            return;
        watcher.on(EV.ERROR, async (error) => {
            const broadcastErr = fsWatchBroadcast.bind(null, fullPath, KEY_ERR);
            if (cont)
                cont.watcherUnusable = true; // documented since Node 10.4.1
            // Workaround for https://github.com/joyent/node/issues/4337
            if (exports.isWindows && error.code === 'EPERM') {
                try {
                    const fd = await (0, promises_1.open)(path, 'r');
                    await fd.close();
                    broadcastErr(error);
                }
                catch (err) {
                    // do nothing
                }
            }
            else {
                broadcastErr(error);
            }
        });
        cont = {
            listeners: listener,
            errHandlers: errHandler,
            rawEmitters: rawEmitter,
            watcher,
        };
        FsWatchInstances.set(fullPath, cont);
    }
    // const index = cont.listeners.indexOf(listener);
    // removes this instance's listeners and closes the underlying fs_watch
    // instance if there are no more listeners left
    return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_ERR, errHandler);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
            // Check to protect against issue gh-730.
            // if (cont.watcherUnusable) {
            cont.watcher.close();
            // }
            FsWatchInstances.delete(fullPath);
            HANDLER_KEYS.forEach(clearItem(cont));
            // @ts-ignore
            cont.watcher = undefined;
            Object.freeze(cont);
        }
    };
};
// fs_watchFile helpers
// object to hold per-process fs_watchFile instances
// (may be shared across chokidar FSWatcher instances)
const FsWatchFileInstances = new Map();
/**
 * Instantiates the fs_watchFile interface or binds listeners
 * to an existing one covering the same file system entry
 * @param path to be watched
 * @param fullPath absolute path
 * @param options options to be passed to fs_watchFile
 * @param handlers container for event listener functions
 * @returns closer
 */
const setFsWatchFileListener = (path, fullPath, options, handlers) => {
    const { listener, rawEmitter } = handlers;
    let cont = FsWatchFileInstances.get(fullPath);
    // let listeners = new Set();
    // let rawEmitters = new Set();
    const copts = cont && cont.options;
    if (copts && (copts.persistent < options.persistent || copts.interval > options.interval)) {
        // "Upgrade" the watcher to persistence or a quicker interval.
        // This creates some unlikely edge case issues if the user mixes
        // settings in a very weird way, but solving for those cases
        // doesn't seem worthwhile for the added complexity.
        // listeners = cont.listeners;
        // rawEmitters = cont.rawEmitters;
        (0, fs_1.unwatchFile)(fullPath);
        cont = undefined;
    }
    if (cont) {
        addAndConvert(cont, KEY_LISTENERS, listener);
        addAndConvert(cont, KEY_RAW, rawEmitter);
    }
    else {
        // TODO
        // listeners.add(listener);
        // rawEmitters.add(rawEmitter);
        cont = {
            listeners: listener,
            rawEmitters: rawEmitter,
            options,
            watcher: (0, fs_1.watchFile)(fullPath, options, (curr, prev) => {
                foreach(cont.rawEmitters, (rawEmitter) => {
                    rawEmitter(EV.CHANGE, fullPath, { curr, prev });
                });
                const currmtime = curr.mtimeMs;
                if (curr.size !== prev.size || currmtime > prev.mtimeMs || currmtime === 0) {
                    foreach(cont.listeners, (listener) => listener(path, curr));
                }
            }),
        };
        FsWatchFileInstances.set(fullPath, cont);
    }
    // const index = cont.listeners.indexOf(listener);
    // Removes this instance's listeners and closes the underlying fs_watchFile
    // instance if there are no more listeners left.
    return () => {
        delFromSet(cont, KEY_LISTENERS, listener);
        delFromSet(cont, KEY_RAW, rawEmitter);
        if (isEmptySet(cont.listeners)) {
            FsWatchFileInstances.delete(fullPath);
            (0, fs_1.unwatchFile)(fullPath);
            cont.options = cont.watcher = undefined;
            Object.freeze(cont);
        }
    };
};
/**
 * @mixin
 */
class NodeFsHandler {
    constructor(fsW) {
        this.fsw = fsW;
        this._boundHandleError = (error) => fsW._handleError(error);
    }
    /**
     * Watch file for changes with fs_watchFile or fs_watch.
     * @param path to file or dir
     * @param listener on fs change
     * @returns closer for the watcher instance
     */
    _watchWithNodeFs(path, listener) {
        const opts = this.fsw.options;
        const directory = sysPath.dirname(path);
        const basename = sysPath.basename(path);
        const parent = this.fsw._getWatchedDir(directory);
        parent.add(basename);
        const absolutePath = sysPath.resolve(path);
        const options = {
            persistent: opts.persistent,
        };
        if (!listener)
            listener = exports.EMPTY_FN;
        let closer;
        if (opts.usePolling) {
            const enableBin = opts.interval !== opts.binaryInterval;
            options.interval = enableBin && isBinaryPath(basename) ? opts.binaryInterval : opts.interval;
            closer = setFsWatchFileListener(path, absolutePath, options, {
                listener,
                rawEmitter: this.fsw._emitRaw,
            });
        }
        else {
            closer = setFsWatchListener(path, absolutePath, options, {
                listener,
                errHandler: this._boundHandleError,
                rawEmitter: this.fsw._emitRaw,
            });
        }
        return closer;
    }
    /**
     * Watch a file and emit add event if warranted.
     * @returns closer for the watcher instance
     */
    _handleFile(file, stats, initialAdd) {
        if (this.fsw.closed) {
            return;
        }
        const dirname = sysPath.dirname(file);
        const basename = sysPath.basename(file);
        const parent = this.fsw._getWatchedDir(dirname);
        // stats is always present
        let prevStats = stats;
        // if the file is already being watched, do nothing
        if (parent.has(basename))
            return;
        const listener = async (path, newStats) => {
            if (!this.fsw._throttle(THROTTLE_MODE_WATCH, file, 5))
                return;
            if (!newStats || newStats.mtimeMs === 0) {
                try {
                    const newStats = await (0, promises_1.stat)(file);
                    if (this.fsw.closed)
                        return;
                    // Check that change event was not fired because of changed only accessTime.
                    const at = newStats.atimeMs;
                    const mt = newStats.mtimeMs;
                    if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                        this.fsw._emit(EV.CHANGE, file, newStats);
                    }
                    if ((exports.isMacos || exports.isLinux || exports.isFreeBSD) && prevStats.ino !== newStats.ino) {
                        this.fsw._closeFile(path);
                        prevStats = newStats;
                        const closer = this._watchWithNodeFs(file, listener);
                        if (closer)
                            this.fsw._addPathCloser(path, closer);
                    }
                    else {
                        prevStats = newStats;
                    }
                }
                catch (error) {
                    // Fix issues where mtime is null but file is still present
                    this.fsw._remove(dirname, basename);
                }
                // add is about to be emitted if file not already tracked in parent
            }
            else if (parent.has(basename)) {
                // Check that change event was not fired because of changed only accessTime.
                const at = newStats.atimeMs;
                const mt = newStats.mtimeMs;
                if (!at || at <= mt || mt !== prevStats.mtimeMs) {
                    this.fsw._emit(EV.CHANGE, file, newStats);
                }
                prevStats = newStats;
            }
        };
        // kick off the watcher
        const closer = this._watchWithNodeFs(file, listener);
        // emit an add event if we're supposed to
        if (!(initialAdd && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(file)) {
            if (!this.fsw._throttle(EV.ADD, file, 0))
                return;
            this.fsw._emit(EV.ADD, file, stats);
        }
        return closer;
    }
    /**
     * Handle symlinks encountered while reading a dir.
     * @param entry returned by readdirp
     * @param directory path of dir being read
     * @param path of this item
     * @param item basename of this item
     * @returns true if no more processing is needed for this entry.
     */
    async _handleSymlink(entry, directory, path, item) {
        if (this.fsw.closed) {
            return;
        }
        const full = entry.fullPath;
        const dir = this.fsw._getWatchedDir(directory);
        if (!this.fsw.options.followSymlinks) {
            // watch symlink directly (don't follow) and detect changes
            this.fsw._incrReadyCount();
            let linkPath;
            try {
                linkPath = await (0, promises_1.realpath)(path);
            }
            catch (e) {
                this.fsw._emitReady();
                return true;
            }
            if (this.fsw.closed)
                return;
            if (dir.has(item)) {
                if (this.fsw._symlinkPaths.get(full) !== linkPath) {
                    this.fsw._symlinkPaths.set(full, linkPath);
                    this.fsw._emit(EV.CHANGE, path, entry.stats);
                }
            }
            else {
                dir.add(item);
                this.fsw._symlinkPaths.set(full, linkPath);
                this.fsw._emit(EV.ADD, path, entry.stats);
            }
            this.fsw._emitReady();
            return true;
        }
        // don't follow the same symlink more than once
        if (this.fsw._symlinkPaths.has(full)) {
            return true;
        }
        this.fsw._symlinkPaths.set(full, true);
    }
    _handleRead(directory, initialAdd, wh, target, dir, depth, throttler) {
        // Normalize the directory name on Windows
        directory = sysPath.join(directory, '');
        throttler = this.fsw._throttle('readdir', directory, 1000);
        if (!throttler)
            return;
        const previous = this.fsw._getWatchedDir(wh.path);
        const current = new Set();
        let stream = this.fsw._readdirp(directory, {
            fileFilter: (entry) => wh.filterPath(entry),
            directoryFilter: (entry) => wh.filterDir(entry),
        });
        if (!stream)
            return;
        stream
            .on(exports.STR_DATA, async (entry) => {
            if (this.fsw.closed) {
                stream = undefined;
                return;
            }
            const item = entry.path;
            let path = sysPath.join(directory, item);
            current.add(item);
            if (entry.stats.isSymbolicLink() &&
                (await this._handleSymlink(entry, directory, path, item))) {
                return;
            }
            if (this.fsw.closed) {
                stream = undefined;
                return;
            }
            // Files that present in current directory snapshot
            // but absent in previous are added to watch list and
            // emit `add` event.
            if (item === target || (!target && !previous.has(item))) {
                this.fsw._incrReadyCount();
                // ensure relativeness of path is preserved in case of watcher reuse
                path = sysPath.join(dir, sysPath.relative(dir, path));
                this._addToNodeFs(path, initialAdd, wh, depth + 1);
            }
        })
            .on(EV.ERROR, this._boundHandleError);
        return new Promise((resolve, reject) => {
            if (!stream)
                return reject();
            stream.once(exports.STR_END, () => {
                if (this.fsw.closed) {
                    stream = undefined;
                    return;
                }
                const wasThrottled = throttler ? throttler.clear() : false;
                resolve(undefined);
                // Files that absent in current directory snapshot
                // but present in previous emit `remove` event
                // and are removed from @watched[directory].
                previous
                    .getChildren()
                    .filter((item) => {
                    return item !== directory && !current.has(item);
                })
                    .forEach((item) => {
                    this.fsw._remove(directory, item);
                });
                stream = undefined;
                // one more time for any missed in case changes came in extremely quickly
                if (wasThrottled)
                    this._handleRead(directory, false, wh, target, dir, depth, throttler);
            });
        });
    }
    /**
     * Read directory to add / remove files from `@watched` list and re-read it on change.
     * @param dir fs path
     * @param stats
     * @param initialAdd
     * @param depth relative to user-supplied path
     * @param target child path targeted for watch
     * @param wh Common watch helpers for this path
     * @param realpath
     * @returns closer for the watcher instance.
     */
    async _handleDir(dir, stats, initialAdd, depth, target, wh, realpath) {
        const parentDir = this.fsw._getWatchedDir(sysPath.dirname(dir));
        const tracked = parentDir.has(sysPath.basename(dir));
        if (!(initialAdd && this.fsw.options.ignoreInitial) && !target && !tracked) {
            this.fsw._emit(EV.ADD_DIR, dir, stats);
        }
        // ensure dir is tracked (harmless if redundant)
        parentDir.add(sysPath.basename(dir));
        this.fsw._getWatchedDir(dir);
        let throttler;
        let closer;
        const oDepth = this.fsw.options.depth;
        if ((oDepth == null || depth <= oDepth) && !this.fsw._symlinkPaths.has(realpath)) {
            if (!target) {
                await this._handleRead(dir, initialAdd, wh, target, dir, depth, throttler);
                if (this.fsw.closed)
                    return;
            }
            closer = this._watchWithNodeFs(dir, (dirPath, stats) => {
                // if current directory is removed, do nothing
                if (stats && stats.mtimeMs === 0)
                    return;
                this._handleRead(dirPath, false, wh, target, dir, depth, throttler);
            });
        }
        return closer;
    }
    /**
     * Handle added file, directory, or glob pattern.
     * Delegates call to _handleFile / _handleDir after checks.
     * @param path to file or ir
     * @param initialAdd was the file added at watch instantiation?
     * @param priorWh depth relative to user-supplied path
     * @param depth Child path actually targeted for watch
     * @param target Child path actually targeted for watch
     */
    async _addToNodeFs(path, initialAdd, priorWh, depth, target) {
        const ready = this.fsw._emitReady;
        if (this.fsw._isIgnored(path) || this.fsw.closed) {
            ready();
            return false;
        }
        const wh = this.fsw._getWatchHelpers(path);
        if (priorWh) {
            wh.filterPath = (entry) => priorWh.filterPath(entry);
            wh.filterDir = (entry) => priorWh.filterDir(entry);
        }
        // evaluate what is at the path we're being asked to watch
        try {
            const stats = await statMethods[wh.statMethod](wh.watchPath);
            if (this.fsw.closed)
                return;
            if (this.fsw._isIgnored(wh.watchPath, stats)) {
                ready();
                return false;
            }
            const follow = this.fsw.options.followSymlinks;
            let closer;
            if (stats.isDirectory()) {
                const absPath = sysPath.resolve(path);
                const targetPath = follow ? await (0, promises_1.realpath)(path) : path;
                if (this.fsw.closed)
                    return;
                closer = await this._handleDir(wh.watchPath, stats, initialAdd, depth, target, wh, targetPath);
                if (this.fsw.closed)
                    return;
                // preserve this symlink's target path
                if (absPath !== targetPath && targetPath !== undefined) {
                    this.fsw._symlinkPaths.set(absPath, targetPath);
                }
            }
            else if (stats.isSymbolicLink()) {
                const targetPath = follow ? await (0, promises_1.realpath)(path) : path;
                if (this.fsw.closed)
                    return;
                const parent = sysPath.dirname(wh.watchPath);
                this.fsw._getWatchedDir(parent).add(wh.watchPath);
                this.fsw._emit(EV.ADD, wh.watchPath, stats);
                closer = await this._handleDir(parent, stats, initialAdd, depth, path, wh, targetPath);
                if (this.fsw.closed)
                    return;
                // preserve this symlink's target path
                if (targetPath !== undefined) {
                    this.fsw._symlinkPaths.set(sysPath.resolve(path), targetPath);
                }
            }
            else {
                closer = this._handleFile(wh.watchPath, stats, initialAdd);
            }
            ready();
            if (closer)
                this.fsw._addPathCloser(path, closer);
            return false;
        }
        catch (error) {
            if (this.fsw._handleError(error)) {
                ready();
                return path;
            }
        }
    }
}
exports.NodeFsHandler = NodeFsHandler;


/***/ }),

/***/ 315:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FSWatcher = exports.WatchHelper = void 0;
exports.watch = watch;
/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
const fs_1 = __nccwpck_require__(896);
const promises_1 = __nccwpck_require__(943);
const events_1 = __nccwpck_require__(434);
const sysPath = __nccwpck_require__(928);
const readdirp_1 = __nccwpck_require__(525);
const handler_js_1 = __nccwpck_require__(507);
const SLASH = '/';
const SLASH_SLASH = '//';
const ONE_DOT = '.';
const TWO_DOTS = '..';
const STRING_TYPE = 'string';
const BACK_SLASH_RE = /\\/g;
const DOUBLE_SLASH_RE = /\/\//;
const DOT_RE = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
const REPLACER_RE = /^\.[/\\]/;
function arrify(item) {
    return Array.isArray(item) ? item : [item];
}
const isMatcherObject = (matcher) => typeof matcher === 'object' && matcher !== null && !(matcher instanceof RegExp);
function createPattern(matcher) {
    if (typeof matcher === 'function')
        return matcher;
    if (typeof matcher === 'string')
        return (string) => matcher === string;
    if (matcher instanceof RegExp)
        return (string) => matcher.test(string);
    if (typeof matcher === 'object' && matcher !== null) {
        return (string) => {
            if (matcher.path === string)
                return true;
            if (matcher.recursive) {
                const relative = sysPath.relative(matcher.path, string);
                if (!relative) {
                    return false;
                }
                return !relative.startsWith('..') && !sysPath.isAbsolute(relative);
            }
            return false;
        };
    }
    return () => false;
}
function normalizePath(path) {
    if (typeof path !== 'string')
        throw new Error('string expected');
    path = sysPath.normalize(path);
    path = path.replace(/\\/g, '/');
    let prepend = false;
    if (path.startsWith('//'))
        prepend = true;
    const DOUBLE_SLASH_RE = /\/\//;
    while (path.match(DOUBLE_SLASH_RE))
        path = path.replace(DOUBLE_SLASH_RE, '/');
    if (prepend)
        path = '/' + path;
    return path;
}
function matchPatterns(patterns, testString, stats) {
    const path = normalizePath(testString);
    for (let index = 0; index < patterns.length; index++) {
        const pattern = patterns[index];
        if (pattern(path, stats)) {
            return true;
        }
    }
    return false;
}
function anymatch(matchers, testString) {
    if (matchers == null) {
        throw new TypeError('anymatch: specify first argument');
    }
    // Early cache for matchers.
    const matchersArray = arrify(matchers);
    const patterns = matchersArray.map((matcher) => createPattern(matcher));
    if (testString == null) {
        return (testString, stats) => {
            return matchPatterns(patterns, testString, stats);
        };
    }
    return matchPatterns(patterns, testString);
}
const unifyPaths = (paths_) => {
    const paths = arrify(paths_).flat();
    if (!paths.every((p) => typeof p === STRING_TYPE)) {
        throw new TypeError(`Non-string provided as watch path: ${paths}`);
    }
    return paths.map(normalizePathToUnix);
};
// If SLASH_SLASH occurs at the beginning of path, it is not replaced
//     because "//StoragePC/DrivePool/Movies" is a valid network path
const toUnix = (string) => {
    let str = string.replace(BACK_SLASH_RE, SLASH);
    let prepend = false;
    if (str.startsWith(SLASH_SLASH)) {
        prepend = true;
    }
    while (str.match(DOUBLE_SLASH_RE)) {
        str = str.replace(DOUBLE_SLASH_RE, SLASH);
    }
    if (prepend) {
        str = SLASH + str;
    }
    return str;
};
// Our version of upath.normalize
// TODO: this is not equal to path-normalize module - investigate why
const normalizePathToUnix = (path) => toUnix(sysPath.normalize(toUnix(path)));
// TODO: refactor
const normalizeIgnored = (cwd = '') => (path) => {
    if (typeof path === 'string') {
        return normalizePathToUnix(sysPath.isAbsolute(path) ? path : sysPath.join(cwd, path));
    }
    else {
        return path;
    }
};
const getAbsolutePath = (path, cwd) => {
    if (sysPath.isAbsolute(path)) {
        return path;
    }
    return sysPath.join(cwd, path);
};
const EMPTY_SET = Object.freeze(new Set());
/**
 * Directory entry.
 */
class DirEntry {
    constructor(dir, removeWatcher) {
        this.path = dir;
        this._removeWatcher = removeWatcher;
        this.items = new Set();
    }
    add(item) {
        const { items } = this;
        if (!items)
            return;
        if (item !== ONE_DOT && item !== TWO_DOTS)
            items.add(item);
    }
    async remove(item) {
        const { items } = this;
        if (!items)
            return;
        items.delete(item);
        if (items.size > 0)
            return;
        const dir = this.path;
        try {
            await (0, promises_1.readdir)(dir);
        }
        catch (err) {
            if (this._removeWatcher) {
                this._removeWatcher(sysPath.dirname(dir), sysPath.basename(dir));
            }
        }
    }
    has(item) {
        const { items } = this;
        if (!items)
            return;
        return items.has(item);
    }
    getChildren() {
        const { items } = this;
        if (!items)
            return [];
        return [...items.values()];
    }
    dispose() {
        this.items.clear();
        this.path = '';
        this._removeWatcher = handler_js_1.EMPTY_FN;
        this.items = EMPTY_SET;
        Object.freeze(this);
    }
}
const STAT_METHOD_F = 'stat';
const STAT_METHOD_L = 'lstat';
class WatchHelper {
    constructor(path, follow, fsw) {
        this.fsw = fsw;
        const watchPath = path;
        this.path = path = path.replace(REPLACER_RE, '');
        this.watchPath = watchPath;
        this.fullWatchPath = sysPath.resolve(watchPath);
        this.dirParts = [];
        this.dirParts.forEach((parts) => {
            if (parts.length > 1)
                parts.pop();
        });
        this.followSymlinks = follow;
        this.statMethod = follow ? STAT_METHOD_F : STAT_METHOD_L;
    }
    entryPath(entry) {
        return sysPath.join(this.watchPath, sysPath.relative(this.watchPath, entry.fullPath));
    }
    filterPath(entry) {
        const { stats } = entry;
        if (stats && stats.isSymbolicLink())
            return this.filterDir(entry);
        const resolvedPath = this.entryPath(entry);
        // TODO: what if stats is undefined? remove !
        return this.fsw._isntIgnored(resolvedPath, stats) && this.fsw._hasReadPermissions(stats);
    }
    filterDir(entry) {
        return this.fsw._isntIgnored(this.entryPath(entry), entry.stats);
    }
}
exports.WatchHelper = WatchHelper;
/**
 * Watches files & directories for changes. Emitted events:
 * `add`, `addDir`, `change`, `unlink`, `unlinkDir`, `all`, `error`
 *
 *     new FSWatcher()
 *       .add(directories)
 *       .on('add', path => log('File', path, 'was added'))
 */
class FSWatcher extends events_1.EventEmitter {
    // Not indenting methods for history sake; for now.
    constructor(_opts = {}) {
        super();
        this.closed = false;
        this._closers = new Map();
        this._ignoredPaths = new Set();
        this._throttled = new Map();
        this._streams = new Set();
        this._symlinkPaths = new Map();
        this._watched = new Map();
        this._pendingWrites = new Map();
        this._pendingUnlinks = new Map();
        this._readyCount = 0;
        this._readyEmitted = false;
        const awf = _opts.awaitWriteFinish;
        const DEF_AWF = { stabilityThreshold: 2000, pollInterval: 100 };
        const opts = {
            // Defaults
            persistent: true,
            ignoreInitial: false,
            ignorePermissionErrors: false,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: true,
            usePolling: false,
            // useAsync: false,
            atomic: true, // NOTE: overwritten later (depends on usePolling)
            ..._opts,
            // Change format
            ignored: _opts.ignored ? arrify(_opts.ignored) : arrify([]),
            awaitWriteFinish: awf === true ? DEF_AWF : typeof awf === 'object' ? { ...DEF_AWF, ...awf } : false,
        };
        // Always default to polling on IBM i because fs.watch() is not available on IBM i.
        if (handler_js_1.isIBMi)
            opts.usePolling = true;
        // Editor atomic write normalization enabled by default with fs.watch
        if (opts.atomic === undefined)
            opts.atomic = !opts.usePolling;
        // opts.atomic = typeof _opts.atomic === 'number' ? _opts.atomic : 100;
        // Global override. Useful for developers, who need to force polling for all
        // instances of chokidar, regardless of usage / dependency depth
        const envPoll = process.env.CHOKIDAR_USEPOLLING;
        if (envPoll !== undefined) {
            const envLower = envPoll.toLowerCase();
            if (envLower === 'false' || envLower === '0')
                opts.usePolling = false;
            else if (envLower === 'true' || envLower === '1')
                opts.usePolling = true;
            else
                opts.usePolling = !!envLower;
        }
        const envInterval = process.env.CHOKIDAR_INTERVAL;
        if (envInterval)
            opts.interval = Number.parseInt(envInterval, 10);
        // This is done to emit ready only once, but each 'add' will increase that?
        let readyCalls = 0;
        this._emitReady = () => {
            readyCalls++;
            if (readyCalls >= this._readyCount) {
                this._emitReady = handler_js_1.EMPTY_FN;
                this._readyEmitted = true;
                // use process.nextTick to allow time for listener to be bound
                process.nextTick(() => this.emit(handler_js_1.EVENTS.READY));
            }
        };
        this._emitRaw = (...args) => this.emit(handler_js_1.EVENTS.RAW, ...args);
        this._boundRemove = this._remove.bind(this);
        this.options = opts;
        this._nodeFsHandler = new handler_js_1.NodeFsHandler(this);
        // You’re frozen when your heart’s not open.
        Object.freeze(opts);
    }
    _addIgnoredPath(matcher) {
        if (isMatcherObject(matcher)) {
            // return early if we already have a deeply equal matcher object
            for (const ignored of this._ignoredPaths) {
                if (isMatcherObject(ignored) &&
                    ignored.path === matcher.path &&
                    ignored.recursive === matcher.recursive) {
                    return;
                }
            }
        }
        this._ignoredPaths.add(matcher);
    }
    _removeIgnoredPath(matcher) {
        this._ignoredPaths.delete(matcher);
        // now find any matcher objects with the matcher as path
        if (typeof matcher === 'string') {
            for (const ignored of this._ignoredPaths) {
                // TODO (43081j): make this more efficient.
                // probably just make a `this._ignoredDirectories` or some
                // such thing.
                if (isMatcherObject(ignored) && ignored.path === matcher) {
                    this._ignoredPaths.delete(ignored);
                }
            }
        }
    }
    // Public methods
    /**
     * Adds paths to be watched on an existing FSWatcher instance.
     * @param paths_ file or file list. Other arguments are unused
     */
    add(paths_, _origAdd, _internal) {
        const { cwd } = this.options;
        this.closed = false;
        this._closePromise = undefined;
        let paths = unifyPaths(paths_);
        if (cwd) {
            paths = paths.map((path) => {
                const absPath = getAbsolutePath(path, cwd);
                // Check `path` instead of `absPath` because the cwd portion can't be a glob
                return absPath;
            });
        }
        paths.forEach((path) => {
            this._removeIgnoredPath(path);
        });
        this._userIgnored = undefined;
        if (!this._readyCount)
            this._readyCount = 0;
        this._readyCount += paths.length;
        Promise.all(paths.map(async (path) => {
            const res = await this._nodeFsHandler._addToNodeFs(path, !_internal, undefined, 0, _origAdd);
            if (res)
                this._emitReady();
            return res;
        })).then((results) => {
            if (this.closed)
                return;
            results.forEach((item) => {
                if (item)
                    this.add(sysPath.dirname(item), sysPath.basename(_origAdd || item));
            });
        });
        return this;
    }
    /**
     * Close watchers or start ignoring events from specified paths.
     */
    unwatch(paths_) {
        if (this.closed)
            return this;
        const paths = unifyPaths(paths_);
        const { cwd } = this.options;
        paths.forEach((path) => {
            // convert to absolute path unless relative path already matches
            if (!sysPath.isAbsolute(path) && !this._closers.has(path)) {
                if (cwd)
                    path = sysPath.join(cwd, path);
                path = sysPath.resolve(path);
            }
            this._closePath(path);
            this._addIgnoredPath(path);
            if (this._watched.has(path)) {
                this._addIgnoredPath({
                    path,
                    recursive: true,
                });
            }
            // reset the cached userIgnored anymatch fn
            // to make ignoredPaths changes effective
            this._userIgnored = undefined;
        });
        return this;
    }
    /**
     * Close watchers and remove all listeners from watched paths.
     */
    close() {
        if (this._closePromise) {
            return this._closePromise;
        }
        this.closed = true;
        // Memory management.
        this.removeAllListeners();
        const closers = [];
        this._closers.forEach((closerList) => closerList.forEach((closer) => {
            const promise = closer();
            if (promise instanceof Promise)
                closers.push(promise);
        }));
        this._streams.forEach((stream) => stream.destroy());
        this._userIgnored = undefined;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((dirent) => dirent.dispose());
        this._closers.clear();
        this._watched.clear();
        this._streams.clear();
        this._symlinkPaths.clear();
        this._throttled.clear();
        this._closePromise = closers.length
            ? Promise.all(closers).then(() => undefined)
            : Promise.resolve();
        return this._closePromise;
    }
    /**
     * Expose list of watched paths
     * @returns for chaining
     */
    getWatched() {
        const watchList = {};
        this._watched.forEach((entry, dir) => {
            const key = this.options.cwd ? sysPath.relative(this.options.cwd, dir) : dir;
            const index = key || ONE_DOT;
            watchList[index] = entry.getChildren().sort();
        });
        return watchList;
    }
    emitWithAll(event, args) {
        this.emit(event, ...args);
        if (event !== handler_js_1.EVENTS.ERROR)
            this.emit(handler_js_1.EVENTS.ALL, event, ...args);
    }
    // Common helpers
    // --------------
    /**
     * Normalize and emit events.
     * Calling _emit DOES NOT MEAN emit() would be called!
     * @param event Type of event
     * @param path File or directory path
     * @param stats arguments to be passed with event
     * @returns the error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    async _emit(event, path, stats) {
        if (this.closed)
            return;
        const opts = this.options;
        if (handler_js_1.isWindows)
            path = sysPath.normalize(path);
        if (opts.cwd)
            path = sysPath.relative(opts.cwd, path);
        const args = [path];
        if (stats != null)
            args.push(stats);
        const awf = opts.awaitWriteFinish;
        let pw;
        if (awf && (pw = this._pendingWrites.get(path))) {
            pw.lastChange = new Date();
            return this;
        }
        if (opts.atomic) {
            if (event === handler_js_1.EVENTS.UNLINK) {
                this._pendingUnlinks.set(path, [event, ...args]);
                setTimeout(() => {
                    this._pendingUnlinks.forEach((entry, path) => {
                        this.emit(...entry);
                        this.emit(handler_js_1.EVENTS.ALL, ...entry);
                        this._pendingUnlinks.delete(path);
                    });
                }, typeof opts.atomic === 'number' ? opts.atomic : 100);
                return this;
            }
            if (event === handler_js_1.EVENTS.ADD && this._pendingUnlinks.has(path)) {
                event = handler_js_1.EVENTS.CHANGE;
                this._pendingUnlinks.delete(path);
            }
        }
        if (awf && (event === handler_js_1.EVENTS.ADD || event === handler_js_1.EVENTS.CHANGE) && this._readyEmitted) {
            const awfEmit = (err, stats) => {
                if (err) {
                    event = handler_js_1.EVENTS.ERROR;
                    args[0] = err;
                    this.emitWithAll(event, args);
                }
                else if (stats) {
                    // if stats doesn't exist the file must have been deleted
                    if (args.length > 1) {
                        args[1] = stats;
                    }
                    else {
                        args.push(stats);
                    }
                    this.emitWithAll(event, args);
                }
            };
            this._awaitWriteFinish(path, awf.stabilityThreshold, event, awfEmit);
            return this;
        }
        if (event === handler_js_1.EVENTS.CHANGE) {
            const isThrottled = !this._throttle(handler_js_1.EVENTS.CHANGE, path, 50);
            if (isThrottled)
                return this;
        }
        if (opts.alwaysStat &&
            stats === undefined &&
            (event === handler_js_1.EVENTS.ADD || event === handler_js_1.EVENTS.ADD_DIR || event === handler_js_1.EVENTS.CHANGE)) {
            const fullPath = opts.cwd ? sysPath.join(opts.cwd, path) : path;
            let stats;
            try {
                stats = await (0, promises_1.stat)(fullPath);
            }
            catch (err) {
                // do nothing
            }
            // Suppress event when fs_stat fails, to avoid sending undefined 'stat'
            if (!stats || this.closed)
                return;
            args.push(stats);
        }
        this.emitWithAll(event, args);
        return this;
    }
    /**
     * Common handler for errors
     * @returns The error if defined, otherwise the value of the FSWatcher instance's `closed` flag
     */
    _handleError(error) {
        const code = error && error.code;
        if (error &&
            code !== 'ENOENT' &&
            code !== 'ENOTDIR' &&
            (!this.options.ignorePermissionErrors || (code !== 'EPERM' && code !== 'EACCES'))) {
            this.emit(handler_js_1.EVENTS.ERROR, error);
        }
        return error || this.closed;
    }
    /**
     * Helper utility for throttling
     * @param actionType type being throttled
     * @param path being acted upon
     * @param timeout duration of time to suppress duplicate actions
     * @returns tracking object or false if action should be suppressed
     */
    _throttle(actionType, path, timeout) {
        if (!this._throttled.has(actionType)) {
            this._throttled.set(actionType, new Map());
        }
        const action = this._throttled.get(actionType);
        if (!action)
            throw new Error('invalid throttle');
        const actionPath = action.get(path);
        if (actionPath) {
            actionPath.count++;
            return false;
        }
        // eslint-disable-next-line prefer-const
        let timeoutObject;
        const clear = () => {
            const item = action.get(path);
            const count = item ? item.count : 0;
            action.delete(path);
            clearTimeout(timeoutObject);
            if (item)
                clearTimeout(item.timeoutObject);
            return count;
        };
        timeoutObject = setTimeout(clear, timeout);
        const thr = { timeoutObject, clear, count: 0 };
        action.set(path, thr);
        return thr;
    }
    _incrReadyCount() {
        return this._readyCount++;
    }
    /**
     * Awaits write operation to finish.
     * Polls a newly created file for size variations. When files size does not change for 'threshold' milliseconds calls callback.
     * @param path being acted upon
     * @param threshold Time in milliseconds a file size must be fixed before acknowledging write OP is finished
     * @param event
     * @param awfEmit Callback to be called when ready for event to be emitted.
     */
    _awaitWriteFinish(path, threshold, event, awfEmit) {
        const awf = this.options.awaitWriteFinish;
        if (typeof awf !== 'object')
            return;
        const pollInterval = awf.pollInterval;
        let timeoutHandler;
        let fullPath = path;
        if (this.options.cwd && !sysPath.isAbsolute(path)) {
            fullPath = sysPath.join(this.options.cwd, path);
        }
        const now = new Date();
        const writes = this._pendingWrites;
        function awaitWriteFinishFn(prevStat) {
            (0, fs_1.stat)(fullPath, (err, curStat) => {
                if (err || !writes.has(path)) {
                    if (err && err.code !== 'ENOENT')
                        awfEmit(err);
                    return;
                }
                const now = Number(new Date());
                if (prevStat && curStat.size !== prevStat.size) {
                    writes.get(path).lastChange = now;
                }
                const pw = writes.get(path);
                const df = now - pw.lastChange;
                if (df >= threshold) {
                    writes.delete(path);
                    awfEmit(undefined, curStat);
                }
                else {
                    timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval, curStat);
                }
            });
        }
        if (!writes.has(path)) {
            writes.set(path, {
                lastChange: now,
                cancelWait: () => {
                    writes.delete(path);
                    clearTimeout(timeoutHandler);
                    return event;
                },
            });
            timeoutHandler = setTimeout(awaitWriteFinishFn, pollInterval);
        }
    }
    /**
     * Determines whether user has asked to ignore this path.
     */
    _isIgnored(path, stats) {
        if (this.options.atomic && DOT_RE.test(path))
            return true;
        if (!this._userIgnored) {
            const { cwd } = this.options;
            const ign = this.options.ignored;
            const ignored = (ign || []).map(normalizeIgnored(cwd));
            const ignoredPaths = [...this._ignoredPaths];
            const list = [...ignoredPaths.map(normalizeIgnored(cwd)), ...ignored];
            this._userIgnored = anymatch(list, undefined);
        }
        return this._userIgnored(path, stats);
    }
    _isntIgnored(path, stat) {
        return !this._isIgnored(path, stat);
    }
    /**
     * Provides a set of common helpers and properties relating to symlink handling.
     * @param path file or directory pattern being watched
     */
    _getWatchHelpers(path) {
        return new WatchHelper(path, this.options.followSymlinks, this);
    }
    // Directory helpers
    // -----------------
    /**
     * Provides directory tracking objects
     * @param directory path of the directory
     */
    _getWatchedDir(directory) {
        const dir = sysPath.resolve(directory);
        if (!this._watched.has(dir))
            this._watched.set(dir, new DirEntry(dir, this._boundRemove));
        return this._watched.get(dir);
    }
    // File helpers
    // ------------
    /**
     * Check for read permissions: https://stackoverflow.com/a/11781404/1358405
     */
    _hasReadPermissions(stats) {
        if (this.options.ignorePermissionErrors)
            return true;
        return Boolean(Number(stats.mode) & 0o400);
    }
    /**
     * Handles emitting unlink events for
     * files and directories, and via recursion, for
     * files and directories within directories that are unlinked
     * @param directory within which the following item is located
     * @param item      base path of item/directory
     */
    _remove(directory, item, isDirectory) {
        // if what is being deleted is a directory, get that directory's paths
        // for recursive deleting and cleaning of watched object
        // if it is not a directory, nestedDirectoryChildren will be empty array
        const path = sysPath.join(directory, item);
        const fullPath = sysPath.resolve(path);
        isDirectory =
            isDirectory != null ? isDirectory : this._watched.has(path) || this._watched.has(fullPath);
        // prevent duplicate handling in case of arriving here nearly simultaneously
        // via multiple paths (such as _handleFile and _handleDir)
        if (!this._throttle('remove', path, 100))
            return;
        // if the only watched file is removed, watch for its return
        if (!isDirectory && this._watched.size === 1) {
            this.add(directory, item, true);
        }
        // This will create a new entry in the watched object in either case
        // so we got to do the directory check beforehand
        const wp = this._getWatchedDir(path);
        const nestedDirectoryChildren = wp.getChildren();
        // Recursively remove children directories / files.
        nestedDirectoryChildren.forEach((nested) => this._remove(path, nested));
        // Check if item was on the watched list and remove it
        const parent = this._getWatchedDir(directory);
        const wasTracked = parent.has(item);
        parent.remove(item);
        // Fixes issue #1042 -> Relative paths were detected and added as symlinks
        // (https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L612),
        // but never removed from the map in case the path was deleted.
        // This leads to an incorrect state if the path was recreated:
        // https://github.com/paulmillr/chokidar/blob/e1753ddbc9571bdc33b4a4af172d52cb6e611c10/lib/nodefs-handler.js#L553
        if (this._symlinkPaths.has(fullPath)) {
            this._symlinkPaths.delete(fullPath);
        }
        // If we wait for this file to be fully written, cancel the wait.
        let relPath = path;
        if (this.options.cwd)
            relPath = sysPath.relative(this.options.cwd, path);
        if (this.options.awaitWriteFinish && this._pendingWrites.has(relPath)) {
            const event = this._pendingWrites.get(relPath).cancelWait();
            if (event === handler_js_1.EVENTS.ADD)
                return;
        }
        // The Entry will either be a directory that just got removed
        // or a bogus entry to a file, in either case we have to remove it
        this._watched.delete(path);
        this._watched.delete(fullPath);
        const eventName = isDirectory ? handler_js_1.EVENTS.UNLINK_DIR : handler_js_1.EVENTS.UNLINK;
        if (wasTracked && !this._isIgnored(path))
            this._emit(eventName, path);
        // Avoid conflicts if we later create another file with the same name
        this._closePath(path);
    }
    /**
     * Closes all watchers for a path
     */
    _closePath(path) {
        this._closeFile(path);
        const dir = sysPath.dirname(path);
        this._getWatchedDir(dir).remove(sysPath.basename(path));
    }
    /**
     * Closes only file-specific watchers
     */
    _closeFile(path) {
        const closers = this._closers.get(path);
        if (!closers)
            return;
        closers.forEach((closer) => closer());
        this._closers.delete(path);
    }
    _addPathCloser(path, closer) {
        if (!closer)
            return;
        let list = this._closers.get(path);
        if (!list) {
            list = [];
            this._closers.set(path, list);
        }
        list.push(closer);
    }
    _readdirp(root, opts) {
        if (this.closed)
            return;
        const options = { type: handler_js_1.EVENTS.ALL, alwaysStat: true, lstat: true, ...opts, depth: 0 };
        let stream = (0, readdirp_1.readdirp)(root, options);
        this._streams.add(stream);
        stream.once(handler_js_1.STR_CLOSE, () => {
            stream = undefined;
        });
        stream.once(handler_js_1.STR_END, () => {
            if (stream) {
                this._streams.delete(stream);
                stream = undefined;
            }
        });
        return stream;
    }
}
exports.FSWatcher = FSWatcher;
/**
 * Instantiates watcher with paths to be tracked.
 * @param paths file / directory paths
 * @param options opts, such as `atomic`, `awaitWriteFinish`, `ignored`, and others
 * @returns an instance of FSWatcher for chaining.
 * @example
 * const watcher = watch('.').on('all', (event, path) => { console.log(event, path); });
 * watch('.', { atomic: true, awaitWriteFinish: true, ignored: (f, stats) => stats?.isFile() && !f.endsWith('.js') })
 */
function watch(paths, options = {}) {
    const watcher = new FSWatcher(options);
    watcher.add(paths);
    return watcher;
}
exports["default"] = { watch, FSWatcher };


/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReaddirpStream = exports.EntryTypes = void 0;
exports.readdirp = readdirp;
exports.readdirpPromise = readdirpPromise;
const promises_1 = __nccwpck_require__(455);
const node_stream_1 = __nccwpck_require__(75);
const node_path_1 = __nccwpck_require__(760);
exports.EntryTypes = {
    FILE_TYPE: 'files',
    DIR_TYPE: 'directories',
    FILE_DIR_TYPE: 'files_directories',
    EVERYTHING_TYPE: 'all',
};
const defaultOptions = {
    root: '.',
    fileFilter: (_entryInfo) => true,
    directoryFilter: (_entryInfo) => true,
    type: exports.EntryTypes.FILE_TYPE,
    lstat: false,
    depth: 2147483648,
    alwaysStat: false,
    highWaterMark: 4096,
};
Object.freeze(defaultOptions);
const RECURSIVE_ERROR_CODE = 'READDIRP_RECURSIVE_ERROR';
const NORMAL_FLOW_ERRORS = new Set(['ENOENT', 'EPERM', 'EACCES', 'ELOOP', RECURSIVE_ERROR_CODE]);
const ALL_TYPES = [
    exports.EntryTypes.DIR_TYPE,
    exports.EntryTypes.EVERYTHING_TYPE,
    exports.EntryTypes.FILE_DIR_TYPE,
    exports.EntryTypes.FILE_TYPE,
];
const DIR_TYPES = new Set([
    exports.EntryTypes.DIR_TYPE,
    exports.EntryTypes.EVERYTHING_TYPE,
    exports.EntryTypes.FILE_DIR_TYPE,
]);
const FILE_TYPES = new Set([
    exports.EntryTypes.EVERYTHING_TYPE,
    exports.EntryTypes.FILE_DIR_TYPE,
    exports.EntryTypes.FILE_TYPE,
]);
const isNormalFlowError = (error) => NORMAL_FLOW_ERRORS.has(error.code);
const wantBigintFsStats = process.platform === 'win32';
const emptyFn = (_entryInfo) => true;
const normalizeFilter = (filter) => {
    if (filter === undefined)
        return emptyFn;
    if (typeof filter === 'function')
        return filter;
    if (typeof filter === 'string') {
        const fl = filter.trim();
        return (entry) => entry.basename === fl;
    }
    if (Array.isArray(filter)) {
        const trItems = filter.map((item) => item.trim());
        return (entry) => trItems.some((f) => entry.basename === f);
    }
    return emptyFn;
};
/** Readable readdir stream, emitting new files as they're being listed. */
class ReaddirpStream extends node_stream_1.Readable {
    constructor(options = {}) {
        super({
            objectMode: true,
            autoDestroy: true,
            highWaterMark: options.highWaterMark,
        });
        const opts = { ...defaultOptions, ...options };
        const { root, type } = opts;
        this._fileFilter = normalizeFilter(opts.fileFilter);
        this._directoryFilter = normalizeFilter(opts.directoryFilter);
        const statMethod = opts.lstat ? promises_1.lstat : promises_1.stat;
        // Use bigint stats if it's windows and stat() supports options (node 10+).
        if (wantBigintFsStats) {
            this._stat = (path) => statMethod(path, { bigint: true });
        }
        else {
            this._stat = statMethod;
        }
        this._maxDepth = opts.depth ?? defaultOptions.depth;
        this._wantsDir = type ? DIR_TYPES.has(type) : false;
        this._wantsFile = type ? FILE_TYPES.has(type) : false;
        this._wantsEverything = type === exports.EntryTypes.EVERYTHING_TYPE;
        this._root = (0, node_path_1.resolve)(root);
        this._isDirent = !opts.alwaysStat;
        this._statsProp = this._isDirent ? 'dirent' : 'stats';
        this._rdOptions = { encoding: 'utf8', withFileTypes: this._isDirent };
        // Launch stream with one parent, the root dir.
        this.parents = [this._exploreDir(root, 1)];
        this.reading = false;
        this.parent = undefined;
    }
    async _read(batch) {
        if (this.reading)
            return;
        this.reading = true;
        try {
            while (!this.destroyed && batch > 0) {
                const par = this.parent;
                const fil = par && par.files;
                if (fil && fil.length > 0) {
                    const { path, depth } = par;
                    const slice = fil.splice(0, batch).map((dirent) => this._formatEntry(dirent, path));
                    const awaited = await Promise.all(slice);
                    for (const entry of awaited) {
                        if (!entry)
                            continue;
                        if (this.destroyed)
                            return;
                        const entryType = await this._getEntryType(entry);
                        if (entryType === 'directory' && this._directoryFilter(entry)) {
                            if (depth <= this._maxDepth) {
                                this.parents.push(this._exploreDir(entry.fullPath, depth + 1));
                            }
                            if (this._wantsDir) {
                                this.push(entry);
                                batch--;
                            }
                        }
                        else if ((entryType === 'file' || this._includeAsFile(entry)) &&
                            this._fileFilter(entry)) {
                            if (this._wantsFile) {
                                this.push(entry);
                                batch--;
                            }
                        }
                    }
                }
                else {
                    const parent = this.parents.pop();
                    if (!parent) {
                        this.push(null);
                        break;
                    }
                    this.parent = await parent;
                    if (this.destroyed)
                        return;
                }
            }
        }
        catch (error) {
            this.destroy(error);
        }
        finally {
            this.reading = false;
        }
    }
    async _exploreDir(path, depth) {
        let files;
        try {
            files = await (0, promises_1.readdir)(path, this._rdOptions);
        }
        catch (error) {
            this._onError(error);
        }
        return { files, depth, path };
    }
    async _formatEntry(dirent, path) {
        let entry;
        const basename = this._isDirent ? dirent.name : dirent;
        try {
            const fullPath = (0, node_path_1.resolve)((0, node_path_1.join)(path, basename));
            entry = { path: (0, node_path_1.relative)(this._root, fullPath), fullPath, basename };
            entry[this._statsProp] = this._isDirent ? dirent : await this._stat(fullPath);
        }
        catch (err) {
            this._onError(err);
            return;
        }
        return entry;
    }
    _onError(err) {
        if (isNormalFlowError(err) && !this.destroyed) {
            this.emit('warn', err);
        }
        else {
            this.destroy(err);
        }
    }
    async _getEntryType(entry) {
        // entry may be undefined, because a warning or an error were emitted
        // and the statsProp is undefined
        if (!entry && this._statsProp in entry) {
            return '';
        }
        const stats = entry[this._statsProp];
        if (stats.isFile())
            return 'file';
        if (stats.isDirectory())
            return 'directory';
        if (stats && stats.isSymbolicLink()) {
            const full = entry.fullPath;
            try {
                const entryRealPath = await (0, promises_1.realpath)(full);
                const entryRealPathStats = await (0, promises_1.lstat)(entryRealPath);
                if (entryRealPathStats.isFile()) {
                    return 'file';
                }
                if (entryRealPathStats.isDirectory()) {
                    const len = entryRealPath.length;
                    if (full.startsWith(entryRealPath) && full.substr(len, 1) === node_path_1.sep) {
                        const recursiveError = new Error(`Circular symlink detected: "${full}" points to "${entryRealPath}"`);
                        // @ts-ignore
                        recursiveError.code = RECURSIVE_ERROR_CODE;
                        return this._onError(recursiveError);
                    }
                    return 'directory';
                }
            }
            catch (error) {
                this._onError(error);
                return '';
            }
        }
    }
    _includeAsFile(entry) {
        const stats = entry && entry[this._statsProp];
        return stats && this._wantsEverything && !stats.isDirectory();
    }
}
exports.ReaddirpStream = ReaddirpStream;
/**
 * Streaming version: Reads all files and directories in given root recursively.
 * Consumes ~constant small amount of RAM.
 * @param root Root directory
 * @param options Options to specify root (start directory), filters and recursion depth
 */
function readdirp(root, options = {}) {
    // @ts-ignore
    let type = options.entryType || options.type;
    if (type === 'both')
        type = exports.EntryTypes.FILE_DIR_TYPE; // backwards-compatibility
    if (type)
        options.type = type;
    if (!root) {
        throw new Error('readdirp: root argument is required. Usage: readdirp(root, options)');
    }
    else if (typeof root !== 'string') {
        throw new TypeError('readdirp: root argument must be a string. Usage: readdirp(root, options)');
    }
    else if (type && !ALL_TYPES.includes(type)) {
        throw new Error(`readdirp: Invalid type passed. Use one of ${ALL_TYPES.join(', ')}`);
    }
    options.root = root;
    return new ReaddirpStream(options);
}
/**
 * Promise version: Reads all files and directories in given root recursively.
 * Compared to streaming version, will consume a lot of RAM e.g. when 1 million files are listed.
 * @returns array of paths and their entry infos
 */
function readdirpPromise(root, options = {}) {
    return new Promise((resolve, reject) => {
        const files = [];
        readdirp(root, options)
            .on('data', (entry) => files.push(entry))
            .on('end', () => resolve(files))
            .on('error', (error) => reject(error));
    });
}
exports["default"] = readdirp;


/***/ }),

/***/ 626:
/***/ ((module) => {

module.exports = eval("require")("/home/runner/work/KitoDockerController/KitoDockerController/src/utils.js");


/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 943:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 455:
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 760:
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 75:
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 827:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { exec } = __nccwpck_require__(127);
const { getImageNameFromPath } = __nccwpck_require__(626);

module.exports = async function (buildPath) {
  const imageName = getImageNameFromPath(buildPath);

  try {
    await exec(`docker build -t ${imageName} ${buildPath}`);
    console.log(`Docker image built successfully: ${imageName}`);
    return true;
  } catch (err) {
    console.error(`Failed to build Docker image: ${imageName}`, err);
    return false;
  }
};


/***/ }),

/***/ 686:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const list = new Set();
const prefix = 'supervised-container-';
const Supervisor = __nccwpck_require__(664);

function mapSupervisorName(name) {
  return `${prefix}${name}`;
}

function add(imageName) {
  if (!list.has(imageName)) {
    list.add(imageName);
    console.log(`Added to container list: ${imageName}`);

    refreshSupervisor();
  }
}

function remove(imageName) {
  if (list.has(imageName)) {
    list.delete(imageName);
    console.log(`Removed from container list: ${imageName}`);

    refreshSupervisor();
  }
}

function refreshSupervisor() {
  const slist = new Map();
  list.forEach(name => {
    const mappedName = mapSupervisorName(name);
    const command = `docker run --rm -it --name ${mappedName} ${name}`;
    slist.set(name, command);
  });

  Supervisor.updateSupervisorConfig('dockerRunner', slist);
}

function restart(imageName) {
  if (list.has(imageName)) {
    const mappedName = mapSupervisorName(imageName);
    Supervisor.restartSupervisorTask(mappedName);
  } else {
    console.error(`Image not found in list: ${imageName}`);
  }
}

module.exports = { add, remove, restart };


/***/ }),

/***/ 664:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(896);
const { execSync } = __nccwpck_require__(317);

if (process.getuid && process.getuid() !== 0) {
  console.error('This script must be run as root.');
  process.exit(1);
}

// Helper to reload Supervisor config
function reloadSupervisor() {
  try {
    console.log('Reloading Supervisor...');
    execSync('supervisorctl reread', { stdio: 'inherit' });
    execSync('supervisorctl update', { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to reload Supervisor:', err.message);
  }
}

// Generate Supervisor config content from a Map
function generateSupervisorFile(commands = new Map()) {
  const lines = [];

  commands.forEach((command, name) => {
    lines.push(`[program:${name}]`);
    lines.push(`command=${command}`);
    lines.push(`autostart=true`);
    lines.push(`autorestart=true`);
    lines.push(`stderr_logfile=/var/log/supervisor/${name}.err.log`);
    lines.push(`stdout_logfile=/var/log/supervisor/${name}.out.log`);
    lines.push(`stderr_logfile_maxbytes=1MB`);
    lines.push(`stderr_logfile_backups=5`);
    lines.push(`stdout_logfile_maxbytes=1MB`);
    lines.push(`stdout_logfile_backups=5`);
    lines.push(''); // Blank line between programs
  });

  return lines.join('\n');
}

// Update Supervisor config file
function updateSupervisorConfig(configName, commands = new Map()) {
  const configPath = `/etc/supervisor/conf.d/${configName}.conf`;
  const content = generateSupervisorFile(commands);

  if (fs.existsSync(configPath)) {
    const current = fs.readFileSync(configPath, 'utf8');
    if (current === content) {
      console.log('No changes to Supervisor config, skipping write.');
      return;
    }
  }

  fs.writeFileSync(configPath, content);
  console.log(`Supervisor config updated at ${configPath}`);
  reloadSupervisor();
}

// Restart a Supervisor-managed task
function restartSupervisorTask(taskName) {
  try {
    console.log(`Restarting Supervisor task: ${taskName}`);
    execSync(`supervisorctl restart ${taskName}`, { stdio: 'inherit' });
  } catch (err) {
    console.error(
      `Failed to restart Supervisor task ${taskName}:`,
      err.message
    );
  }
}

module.exports = {
  updateSupervisorConfig,
  restartSupervisorTask,
};


/***/ }),

/***/ 127:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { exec } = __nccwpck_require__(317);

function execAsync(command, verbose = true) {
  return new Promise((resolve, reject) => {
    if (!command || typeof command !== 'string') {
      console.error('Invalid command:', command);
      return reject(new Error('Invalid command'));
    }

    if (verbose) console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (verbose) {
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
      }

      if (error) {
        if (verbose) {
          console.error(`Error executing command "${command}":`, error.message);
        }
        reject(error);
      } else {
        if (verbose) console.log(`Command executed successfully: ${command}`);
        resolve({ stdout, stderr });
      }
    });
  });
}

module.exports = {
  exec: execAsync,
};


/***/ }),

/***/ 494:
/***/ ((module) => {

class UniqueQueue {
  constructor(name = Symbol('Queue')) {
    this.name = name;
    this.list = new Set();
  }

  enqueue(element) {
    if (!this.list.has(element)) {
      this.list.add(element);
      console.log(`Enqueued in ${this.name.toString()}: ${element}`);
    }
  }

  dequeue() {
    if (this.list.size === 0) {
      return null;
    }
    const element = this.list.values().next().value;
    this.list.delete(element);
    console.log(`Dequeued from ${this.name.toString()}: ${element}`);
    return element;
  }

  clear() {
    this.list.clear();
    console.log(`Queue ${this.name.toString()} cleared.`);
  }

  peek() {
    if (this.list.size === 0) return null;
    return this.list.values().next().value;
  }

  get size() {
    return this.list.size;
  }

  has(element) {
    return this.list.has(element);
  }

  [Symbol.iterator]() {
    return this.list.values();
  }

  toArray() {
    return Array.from(this.list);
  }

  toString() {
    return `UniqueQueue(${this.name.toString()}): ${Array.from(this.list).join(', ')}`;
  }
}

module.exports = UniqueQueue;


/***/ }),

/***/ 237:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const path = __nccwpck_require__(928);
const fs = __nccwpck_require__(896);

/**
 * Convert a build path into a Docker-compatible image name.
 * Example: "/projects/My App" → "my-app"
 *
 * @param {string} buildPath
 * @returns {string}
 */
function getImageNameFromPath(buildPath) {
  return path
    .basename(buildPath)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // collapse non-alphanumerics to "-"
    .replace(/^-+|-+$/g, ''); // trim leading/trailing "-"
}

function isValidDockerPath(buildPath) {
  const pathDockerfile = path.join(buildPath, 'Dockerfile');
  if (!fs.existsSync(pathDockerfile)) {
    console.warn(`Dockerfile not found at: ${pathDockerfile}`);
    return false;
  }

  const stats = fs.statSync(pathDockerfile);
  return stats.isFile();
}

module.exports = {
  getImageNameFromPath,
  isValidDockerPath,
};


/***/ }),

/***/ 217:
/***/ ((module) => {

const debounceTimers = new Map();

/**
 * Debounce a callback by key.
 *
 * @param {string|symbol} key - Unique identifier for the operation (e.g., a path).
 * @param {Function} callback - The function to execute after debounce delay.
 * @param {number} delay - Delay in milliseconds.
 */
function debounce(key, callback, delay = 1000) {
  if (debounceTimers.has(key)) {
    clearTimeout(debounceTimers.get(key));
  }

  debounceTimers.set(
    key,
    setTimeout(() => {
      debounceTimers.delete(key);
      callback();
    }, delay)
  );
}

function clearAll() {
  for (const timeout of debounceTimers.values()) {
    clearTimeout(timeout);
  }
  debounceTimers.clear();
}

module.exports = {
  debounce,
  clearAll,
};


/***/ }),

/***/ 443:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(896);
const path = __nccwpck_require__(928);

const UniqueQueue = __nccwpck_require__(494);
console.log('Queue module loaded.', UniqueQueue);

const watcher = __nccwpck_require__(696);
const debounce = __nccwpck_require__(217);

const buildQueue = new UniqueQueue();
const buildImage = __nccwpck_require__(827);
const Containers = __nccwpck_require__(686);
const Utils = __nccwpck_require__(237);

let running = true;

module.exports = function (dockerPath) {
  if (!fs.existsSync(dockerPath)) {
    throw new Error(`Docker path does not exist: ${dockerPath}`);
  }

  if (!fs.statSync(dockerPath).isDirectory()) {
    throw new Error(`Docker path is not a directory: ${dockerPath}`);
  }

  console.log(`Watching Docker path: ${dockerPath}`);
  const watcherInstance = watcher.createWatcher(
    dockerPath,
    (event, filePath) => {
      const pathRelative = path.relative(dockerPath, filePath);
      const pathName = pathRelative.split(path.sep)[0];
      const buildPath = path.join(dockerPath, pathName);
      debounce.debounce(
        buildPath,
        () => handleDirectoryChange(buildPath),
        1000
      );
    }
  );

  process.on('SIGINT', () => {
    console.log('Shutting down...');
    watcherInstance.close();
    running = false;
    process.exit(0);
  });

  buildThread();
};

function handleDirectoryChange(buildPath) {
  if (!fs.existsSync(buildPath)) {
    Containers.remove(Utils.getImageNameFromPath(buildPath));

    return;
  }

  if (!fs.statSync(buildPath).isDirectory()) {
    return;
  }

  const buildFile = path.join(buildPath, 'Dockerfile');
  if (!fs.existsSync(buildFile)) {
    return;
  }

  Containers.add(Utils.getImageNameFromPath(buildPath));

  buildQueue.enqueue(buildPath);
}

async function buildThread() {
  while (running) {
    const buildPath = buildQueue.dequeue();

    if (buildPath === null) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      continue;
    }

    const success = await buildImage(buildPath);
    if (success) {
      handleNewImageBuild(buildPath);
    }
  }
}

function handleNewImageBuild(buildPath) {
  Containers.restart(Utils.getImageNameFromPath(buildPath));
}


/***/ }),

/***/ 696:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const chokidar = __nccwpck_require__(315);
module.exports.createWatcher = function (buildPath, callback) {
  console.log(`Creating watcher for: ${buildPath}`);

  const watcher = chokidar.watch(buildPath, {
    ignoreInitial: false,
    persistent: true,
  });

  watcher.on('all', (event, filePath) => {
    callback(event, filePath);
  });

  return watcher;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";


if (process.argv.length != 3) {
  console.error('Usage: node index.js <dockerPath>');
  process.exit(1);
}

const dockerPath = process.argv[2];
const main = __nccwpck_require__(443);

main(dockerPath);

})();

module.exports = __webpack_exports__;
/******/ })()
;
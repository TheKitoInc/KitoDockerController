require('./sourcemap-register.js');
(() => {
  var t = {
    507: (t, e, s) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: true });
      e.NodeFsHandler =
        e.EVENTS =
        e.isIBMi =
        e.isFreeBSD =
        e.isLinux =
        e.isMacos =
        e.isWindows =
        e.IDENTITY_FN =
        e.EMPTY_FN =
        e.STR_CLOSE =
        e.STR_END =
        e.STR_DATA =
          void 0;
      const i = s(896);
      const r = s(943);
      const n = s(928);
      const o = s(857);
      e.STR_DATA = 'data';
      e.STR_END = 'end';
      e.STR_CLOSE = 'close';
      const EMPTY_FN = () => {};
      e.EMPTY_FN = EMPTY_FN;
      const IDENTITY_FN = t => t;
      e.IDENTITY_FN = IDENTITY_FN;
      const a = process.platform;
      e.isWindows = a === 'win32';
      e.isMacos = a === 'darwin';
      e.isLinux = a === 'linux';
      e.isFreeBSD = a === 'freebsd';
      e.isIBMi = (0, o.type)() === 'OS400';
      e.EVENTS = {
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
      const c = e.EVENTS;
      const h = 'watch';
      const l = { lstat: r.lstat, stat: r.stat };
      const d = 'listeners';
      const f = 'errHandlers';
      const u = 'rawEmitters';
      const p = [d, f, u];
      const m = new Set([
        '3dm',
        '3ds',
        '3g2',
        '3gp',
        '7z',
        'a',
        'aac',
        'adp',
        'afdesign',
        'afphoto',
        'afpub',
        'ai',
        'aif',
        'aiff',
        'alz',
        'ape',
        'apk',
        'appimage',
        'ar',
        'arj',
        'asf',
        'au',
        'avi',
        'bak',
        'baml',
        'bh',
        'bin',
        'bk',
        'bmp',
        'btif',
        'bz2',
        'bzip2',
        'cab',
        'caf',
        'cgm',
        'class',
        'cmx',
        'cpio',
        'cr2',
        'cur',
        'dat',
        'dcm',
        'deb',
        'dex',
        'djvu',
        'dll',
        'dmg',
        'dng',
        'doc',
        'docm',
        'docx',
        'dot',
        'dotm',
        'dra',
        'DS_Store',
        'dsk',
        'dts',
        'dtshd',
        'dvb',
        'dwg',
        'dxf',
        'ecelp4800',
        'ecelp7470',
        'ecelp9600',
        'egg',
        'eol',
        'eot',
        'epub',
        'exe',
        'f4v',
        'fbs',
        'fh',
        'fla',
        'flac',
        'flatpak',
        'fli',
        'flv',
        'fpx',
        'fst',
        'fvt',
        'g3',
        'gh',
        'gif',
        'graffle',
        'gz',
        'gzip',
        'h261',
        'h263',
        'h264',
        'icns',
        'ico',
        'ief',
        'img',
        'ipa',
        'iso',
        'jar',
        'jpeg',
        'jpg',
        'jpgv',
        'jpm',
        'jxr',
        'key',
        'ktx',
        'lha',
        'lib',
        'lvp',
        'lz',
        'lzh',
        'lzma',
        'lzo',
        'm3u',
        'm4a',
        'm4v',
        'mar',
        'mdi',
        'mht',
        'mid',
        'midi',
        'mj2',
        'mka',
        'mkv',
        'mmr',
        'mng',
        'mobi',
        'mov',
        'movie',
        'mp3',
        'mp4',
        'mp4a',
        'mpeg',
        'mpg',
        'mpga',
        'mxu',
        'nef',
        'npx',
        'numbers',
        'nupkg',
        'o',
        'odp',
        'ods',
        'odt',
        'oga',
        'ogg',
        'ogv',
        'otf',
        'ott',
        'pages',
        'pbm',
        'pcx',
        'pdb',
        'pdf',
        'pea',
        'pgm',
        'pic',
        'png',
        'pnm',
        'pot',
        'potm',
        'potx',
        'ppa',
        'ppam',
        'ppm',
        'pps',
        'ppsm',
        'ppsx',
        'ppt',
        'pptm',
        'pptx',
        'psd',
        'pya',
        'pyc',
        'pyo',
        'pyv',
        'qt',
        'rar',
        'ras',
        'raw',
        'resources',
        'rgb',
        'rip',
        'rlc',
        'rmf',
        'rmvb',
        'rpm',
        'rtf',
        'rz',
        's3m',
        's7z',
        'scpt',
        'sgi',
        'shar',
        'snap',
        'sil',
        'sketch',
        'slk',
        'smv',
        'snk',
        'so',
        'stl',
        'suo',
        'sub',
        'swf',
        'tar',
        'tbz',
        'tbz2',
        'tga',
        'tgz',
        'thmx',
        'tif',
        'tiff',
        'tlz',
        'ttc',
        'ttf',
        'txz',
        'udf',
        'uvh',
        'uvi',
        'uvm',
        'uvp',
        'uvs',
        'uvu',
        'viv',
        'vob',
        'war',
        'wav',
        'wax',
        'wbmp',
        'wdp',
        'weba',
        'webm',
        'webp',
        'whl',
        'wim',
        'wm',
        'wma',
        'wmv',
        'wmx',
        'woff',
        'woff2',
        'wrm',
        'wvx',
        'xbm',
        'xif',
        'xla',
        'xlam',
        'xls',
        'xlsb',
        'xlsm',
        'xlsx',
        'xlt',
        'xltm',
        'xltx',
        'xm',
        'xmind',
        'xpi',
        'xpm',
        'xwd',
        'xz',
        'z',
        'zip',
        'zipx',
      ]);
      const isBinaryPath = t => m.has(n.extname(t).slice(1).toLowerCase());
      const foreach = (t, e) => {
        if (t instanceof Set) {
          t.forEach(e);
        } else {
          e(t);
        }
      };
      const addAndConvert = (t, e, s) => {
        let i = t[e];
        if (!(i instanceof Set)) {
          t[e] = i = new Set([i]);
        }
        i.add(s);
      };
      const clearItem = t => e => {
        const s = t[e];
        if (s instanceof Set) {
          s.clear();
        } else {
          delete t[e];
        }
      };
      const delFromSet = (t, e, s) => {
        const i = t[e];
        if (i instanceof Set) {
          i.delete(s);
        } else if (i === s) {
          delete t[e];
        }
      };
      const isEmptySet = t => (t instanceof Set ? t.size === 0 : !t);
      const _ = new Map();
      function createFsWatchInstance(t, e, s, r, o) {
        const handleEvent = (e, i) => {
          s(t);
          o(e, i, { watchedPath: t });
          if (i && t !== i) {
            fsWatchBroadcast(n.resolve(t, i), d, n.join(t, i));
          }
        };
        try {
          return (0, i.watch)(t, { persistent: e.persistent }, handleEvent);
        } catch (t) {
          r(t);
          return undefined;
        }
      }
      const fsWatchBroadcast = (t, e, s, i, r) => {
        const n = _.get(t);
        if (!n) return;
        foreach(n[e], t => {
          t(s, i, r);
        });
      };
      const setFsWatchListener = (t, s, i, n) => {
        const { listener: o, errHandler: a, rawEmitter: h } = n;
        let l = _.get(s);
        let m;
        if (!i.persistent) {
          m = createFsWatchInstance(t, i, o, a, h);
          if (!m) return;
          return m.close.bind(m);
        }
        if (l) {
          addAndConvert(l, d, o);
          addAndConvert(l, f, a);
          addAndConvert(l, u, h);
        } else {
          m = createFsWatchInstance(
            t,
            i,
            fsWatchBroadcast.bind(null, s, d),
            a,
            fsWatchBroadcast.bind(null, s, u)
          );
          if (!m) return;
          m.on(c.ERROR, async i => {
            const n = fsWatchBroadcast.bind(null, s, f);
            if (l) l.watcherUnusable = true;
            if (e.isWindows && i.code === 'EPERM') {
              try {
                const e = await (0, r.open)(t, 'r');
                await e.close();
                n(i);
              } catch (t) {}
            } else {
              n(i);
            }
          });
          l = { listeners: o, errHandlers: a, rawEmitters: h, watcher: m };
          _.set(s, l);
        }
        return () => {
          delFromSet(l, d, o);
          delFromSet(l, f, a);
          delFromSet(l, u, h);
          if (isEmptySet(l.listeners)) {
            l.watcher.close();
            _.delete(s);
            p.forEach(clearItem(l));
            l.watcher = undefined;
            Object.freeze(l);
          }
        };
      };
      const w = new Map();
      const setFsWatchFileListener = (t, e, s, r) => {
        const { listener: n, rawEmitter: o } = r;
        let a = w.get(e);
        const h = a && a.options;
        if (h && (h.persistent < s.persistent || h.interval > s.interval)) {
          (0, i.unwatchFile)(e);
          a = undefined;
        }
        if (a) {
          addAndConvert(a, d, n);
          addAndConvert(a, u, o);
        } else {
          a = {
            listeners: n,
            rawEmitters: o,
            options: s,
            watcher: (0, i.watchFile)(e, s, (s, i) => {
              foreach(a.rawEmitters, t => {
                t(c.CHANGE, e, { curr: s, prev: i });
              });
              const r = s.mtimeMs;
              if (s.size !== i.size || r > i.mtimeMs || r === 0) {
                foreach(a.listeners, e => e(t, s));
              }
            }),
          };
          w.set(e, a);
        }
        return () => {
          delFromSet(a, d, n);
          delFromSet(a, u, o);
          if (isEmptySet(a.listeners)) {
            w.delete(e);
            (0, i.unwatchFile)(e);
            a.options = a.watcher = undefined;
            Object.freeze(a);
          }
        };
      };
      class NodeFsHandler {
        constructor(t) {
          this.fsw = t;
          this._boundHandleError = e => t._handleError(e);
        }
        _watchWithNodeFs(t, s) {
          const i = this.fsw.options;
          const r = n.dirname(t);
          const o = n.basename(t);
          const a = this.fsw._getWatchedDir(r);
          a.add(o);
          const c = n.resolve(t);
          const h = { persistent: i.persistent };
          if (!s) s = e.EMPTY_FN;
          let l;
          if (i.usePolling) {
            const e = i.interval !== i.binaryInterval;
            h.interval = e && isBinaryPath(o) ? i.binaryInterval : i.interval;
            l = setFsWatchFileListener(t, c, h, {
              listener: s,
              rawEmitter: this.fsw._emitRaw,
            });
          } else {
            l = setFsWatchListener(t, c, h, {
              listener: s,
              errHandler: this._boundHandleError,
              rawEmitter: this.fsw._emitRaw,
            });
          }
          return l;
        }
        _handleFile(t, s, i) {
          if (this.fsw.closed) {
            return;
          }
          const o = n.dirname(t);
          const a = n.basename(t);
          const l = this.fsw._getWatchedDir(o);
          let d = s;
          if (l.has(a)) return;
          const listener = async (s, i) => {
            if (!this.fsw._throttle(h, t, 5)) return;
            if (!i || i.mtimeMs === 0) {
              try {
                const i = await (0, r.stat)(t);
                if (this.fsw.closed) return;
                const n = i.atimeMs;
                const o = i.mtimeMs;
                if (!n || n <= o || o !== d.mtimeMs) {
                  this.fsw._emit(c.CHANGE, t, i);
                }
                if (
                  (e.isMacos || e.isLinux || e.isFreeBSD) &&
                  d.ino !== i.ino
                ) {
                  this.fsw._closeFile(s);
                  d = i;
                  const e = this._watchWithNodeFs(t, listener);
                  if (e) this.fsw._addPathCloser(s, e);
                } else {
                  d = i;
                }
              } catch (t) {
                this.fsw._remove(o, a);
              }
            } else if (l.has(a)) {
              const e = i.atimeMs;
              const s = i.mtimeMs;
              if (!e || e <= s || s !== d.mtimeMs) {
                this.fsw._emit(c.CHANGE, t, i);
              }
              d = i;
            }
          };
          const f = this._watchWithNodeFs(t, listener);
          if (
            !(i && this.fsw.options.ignoreInitial) &&
            this.fsw._isntIgnored(t)
          ) {
            if (!this.fsw._throttle(c.ADD, t, 0)) return;
            this.fsw._emit(c.ADD, t, s);
          }
          return f;
        }
        async _handleSymlink(t, e, s, i) {
          if (this.fsw.closed) {
            return;
          }
          const n = t.fullPath;
          const o = this.fsw._getWatchedDir(e);
          if (!this.fsw.options.followSymlinks) {
            this.fsw._incrReadyCount();
            let e;
            try {
              e = await (0, r.realpath)(s);
            } catch (t) {
              this.fsw._emitReady();
              return true;
            }
            if (this.fsw.closed) return;
            if (o.has(i)) {
              if (this.fsw._symlinkPaths.get(n) !== e) {
                this.fsw._symlinkPaths.set(n, e);
                this.fsw._emit(c.CHANGE, s, t.stats);
              }
            } else {
              o.add(i);
              this.fsw._symlinkPaths.set(n, e);
              this.fsw._emit(c.ADD, s, t.stats);
            }
            this.fsw._emitReady();
            return true;
          }
          if (this.fsw._symlinkPaths.has(n)) {
            return true;
          }
          this.fsw._symlinkPaths.set(n, true);
        }
        _handleRead(t, s, i, r, o, a, h) {
          t = n.join(t, '');
          h = this.fsw._throttle('readdir', t, 1e3);
          if (!h) return;
          const l = this.fsw._getWatchedDir(i.path);
          const d = new Set();
          let f = this.fsw._readdirp(t, {
            fileFilter: t => i.filterPath(t),
            directoryFilter: t => i.filterDir(t),
          });
          if (!f) return;
          f.on(e.STR_DATA, async e => {
            if (this.fsw.closed) {
              f = undefined;
              return;
            }
            const c = e.path;
            let h = n.join(t, c);
            d.add(c);
            if (
              e.stats.isSymbolicLink() &&
              (await this._handleSymlink(e, t, h, c))
            ) {
              return;
            }
            if (this.fsw.closed) {
              f = undefined;
              return;
            }
            if (c === r || (!r && !l.has(c))) {
              this.fsw._incrReadyCount();
              h = n.join(o, n.relative(o, h));
              this._addToNodeFs(h, s, i, a + 1);
            }
          }).on(c.ERROR, this._boundHandleError);
          return new Promise((s, n) => {
            if (!f) return n();
            f.once(e.STR_END, () => {
              if (this.fsw.closed) {
                f = undefined;
                return;
              }
              const e = h ? h.clear() : false;
              s(undefined);
              l.getChildren()
                .filter(e => e !== t && !d.has(e))
                .forEach(e => {
                  this.fsw._remove(t, e);
                });
              f = undefined;
              if (e) this._handleRead(t, false, i, r, o, a, h);
            });
          });
        }
        async _handleDir(t, e, s, i, r, o, a) {
          const h = this.fsw._getWatchedDir(n.dirname(t));
          const l = h.has(n.basename(t));
          if (!(s && this.fsw.options.ignoreInitial) && !r && !l) {
            this.fsw._emit(c.ADD_DIR, t, e);
          }
          h.add(n.basename(t));
          this.fsw._getWatchedDir(t);
          let d;
          let f;
          const u = this.fsw.options.depth;
          if ((u == null || i <= u) && !this.fsw._symlinkPaths.has(a)) {
            if (!r) {
              await this._handleRead(t, s, o, r, t, i, d);
              if (this.fsw.closed) return;
            }
            f = this._watchWithNodeFs(t, (e, s) => {
              if (s && s.mtimeMs === 0) return;
              this._handleRead(e, false, o, r, t, i, d);
            });
          }
          return f;
        }
        async _addToNodeFs(t, e, s, i, o) {
          const a = this.fsw._emitReady;
          if (this.fsw._isIgnored(t) || this.fsw.closed) {
            a();
            return false;
          }
          const h = this.fsw._getWatchHelpers(t);
          if (s) {
            h.filterPath = t => s.filterPath(t);
            h.filterDir = t => s.filterDir(t);
          }
          try {
            const s = await l[h.statMethod](h.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(h.watchPath, s)) {
              a();
              return false;
            }
            const d = this.fsw.options.followSymlinks;
            let f;
            if (s.isDirectory()) {
              const a = n.resolve(t);
              const c = d ? await (0, r.realpath)(t) : t;
              if (this.fsw.closed) return;
              f = await this._handleDir(h.watchPath, s, e, i, o, h, c);
              if (this.fsw.closed) return;
              if (a !== c && c !== undefined) {
                this.fsw._symlinkPaths.set(a, c);
              }
            } else if (s.isSymbolicLink()) {
              const o = d ? await (0, r.realpath)(t) : t;
              if (this.fsw.closed) return;
              const a = n.dirname(h.watchPath);
              this.fsw._getWatchedDir(a).add(h.watchPath);
              this.fsw._emit(c.ADD, h.watchPath, s);
              f = await this._handleDir(a, s, e, i, t, h, o);
              if (this.fsw.closed) return;
              if (o !== undefined) {
                this.fsw._symlinkPaths.set(n.resolve(t), o);
              }
            } else {
              f = this._handleFile(h.watchPath, s, e);
            }
            a();
            if (f) this.fsw._addPathCloser(t, f);
            return false;
          } catch (e) {
            if (this.fsw._handleError(e)) {
              a();
              return t;
            }
          }
        }
      }
      e.NodeFsHandler = NodeFsHandler;
    },
    315: (t, e, s) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: true });
      e.FSWatcher = e.WatchHelper = void 0;
      e.watch = watch;
      /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */ const i =
        s(896);
      const r = s(943);
      const n = s(434);
      const o = s(928);
      const a = s(525);
      const c = s(507);
      const h = '/';
      const l = '//';
      const d = '.';
      const f = '..';
      const u = 'string';
      const p = /\\/g;
      const m = /\/\//;
      const _ = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
      const w = /^\.[/\\]/;
      function arrify(t) {
        return Array.isArray(t) ? t : [t];
      }
      const isMatcherObject = t =>
        typeof t === 'object' && t !== null && !(t instanceof RegExp);
      function createPattern(t) {
        if (typeof t === 'function') return t;
        if (typeof t === 'string') return e => t === e;
        if (t instanceof RegExp) return e => t.test(e);
        if (typeof t === 'object' && t !== null) {
          return e => {
            if (t.path === e) return true;
            if (t.recursive) {
              const s = o.relative(t.path, e);
              if (!s) {
                return false;
              }
              return !s.startsWith('..') && !o.isAbsolute(s);
            }
            return false;
          };
        }
        return () => false;
      }
      function normalizePath(t) {
        if (typeof t !== 'string') throw new Error('string expected');
        t = o.normalize(t);
        t = t.replace(/\\/g, '/');
        let e = false;
        if (t.startsWith('//')) e = true;
        const s = /\/\//;
        while (t.match(s)) t = t.replace(s, '/');
        if (e) t = '/' + t;
        return t;
      }
      function matchPatterns(t, e, s) {
        const i = normalizePath(e);
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r(i, s)) {
            return true;
          }
        }
        return false;
      }
      function anymatch(t, e) {
        if (t == null) {
          throw new TypeError('anymatch: specify first argument');
        }
        const s = arrify(t);
        const i = s.map(t => createPattern(t));
        if (e == null) {
          return (t, e) => matchPatterns(i, t, e);
        }
        return matchPatterns(i, e);
      }
      const unifyPaths = t => {
        const e = arrify(t).flat();
        if (!e.every(t => typeof t === u)) {
          throw new TypeError(`Non-string provided as watch path: ${e}`);
        }
        return e.map(normalizePathToUnix);
      };
      const toUnix = t => {
        let e = t.replace(p, h);
        let s = false;
        if (e.startsWith(l)) {
          s = true;
        }
        while (e.match(m)) {
          e = e.replace(m, h);
        }
        if (s) {
          e = h + e;
        }
        return e;
      };
      const normalizePathToUnix = t => toUnix(o.normalize(toUnix(t)));
      const normalizeIgnored =
        (t = '') =>
        e => {
          if (typeof e === 'string') {
            return normalizePathToUnix(o.isAbsolute(e) ? e : o.join(t, e));
          } else {
            return e;
          }
        };
      const getAbsolutePath = (t, e) => {
        if (o.isAbsolute(t)) {
          return t;
        }
        return o.join(e, t);
      };
      const g = Object.freeze(new Set());
      class DirEntry {
        constructor(t, e) {
          this.path = t;
          this._removeWatcher = e;
          this.items = new Set();
        }
        add(t) {
          const { items: e } = this;
          if (!e) return;
          if (t !== d && t !== f) e.add(t);
        }
        async remove(t) {
          const { items: e } = this;
          if (!e) return;
          e.delete(t);
          if (e.size > 0) return;
          const s = this.path;
          try {
            await (0, r.readdir)(s);
          } catch (t) {
            if (this._removeWatcher) {
              this._removeWatcher(o.dirname(s), o.basename(s));
            }
          }
        }
        has(t) {
          const { items: e } = this;
          if (!e) return;
          return e.has(t);
        }
        getChildren() {
          const { items: t } = this;
          if (!t) return [];
          return [...t.values()];
        }
        dispose() {
          this.items.clear();
          this.path = '';
          this._removeWatcher = c.EMPTY_FN;
          this.items = g;
          Object.freeze(this);
        }
      }
      const y = 'stat';
      const E = 'lstat';
      class WatchHelper {
        constructor(t, e, s) {
          this.fsw = s;
          const i = t;
          this.path = t = t.replace(w, '');
          this.watchPath = i;
          this.fullWatchPath = o.resolve(i);
          this.dirParts = [];
          this.dirParts.forEach(t => {
            if (t.length > 1) t.pop();
          });
          this.followSymlinks = e;
          this.statMethod = e ? y : E;
        }
        entryPath(t) {
          return o.join(this.watchPath, o.relative(this.watchPath, t.fullPath));
        }
        filterPath(t) {
          const { stats: e } = t;
          if (e && e.isSymbolicLink()) return this.filterDir(t);
          const s = this.entryPath(t);
          return this.fsw._isntIgnored(s, e) && this.fsw._hasReadPermissions(e);
        }
        filterDir(t) {
          return this.fsw._isntIgnored(this.entryPath(t), t.stats);
        }
      }
      e.WatchHelper = WatchHelper;
      class FSWatcher extends n.EventEmitter {
        constructor(t = {}) {
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
          const e = t.awaitWriteFinish;
          const s = { stabilityThreshold: 2e3, pollInterval: 100 };
          const i = {
            persistent: true,
            ignoreInitial: false,
            ignorePermissionErrors: false,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: true,
            usePolling: false,
            atomic: true,
            ...t,
            ignored: t.ignored ? arrify(t.ignored) : arrify([]),
            awaitWriteFinish:
              e === true ? s : typeof e === 'object' ? { ...s, ...e } : false,
          };
          if (c.isIBMi) i.usePolling = true;
          if (i.atomic === undefined) i.atomic = !i.usePolling;
          const r = process.env.CHOKIDAR_USEPOLLING;
          if (r !== undefined) {
            const t = r.toLowerCase();
            if (t === 'false' || t === '0') i.usePolling = false;
            else if (t === 'true' || t === '1') i.usePolling = true;
            else i.usePolling = !!t;
          }
          const n = process.env.CHOKIDAR_INTERVAL;
          if (n) i.interval = Number.parseInt(n, 10);
          let o = 0;
          this._emitReady = () => {
            o++;
            if (o >= this._readyCount) {
              this._emitReady = c.EMPTY_FN;
              this._readyEmitted = true;
              process.nextTick(() => this.emit(c.EVENTS.READY));
            }
          };
          this._emitRaw = (...t) => this.emit(c.EVENTS.RAW, ...t);
          this._boundRemove = this._remove.bind(this);
          this.options = i;
          this._nodeFsHandler = new c.NodeFsHandler(this);
          Object.freeze(i);
        }
        _addIgnoredPath(t) {
          if (isMatcherObject(t)) {
            for (const e of this._ignoredPaths) {
              if (
                isMatcherObject(e) &&
                e.path === t.path &&
                e.recursive === t.recursive
              ) {
                return;
              }
            }
          }
          this._ignoredPaths.add(t);
        }
        _removeIgnoredPath(t) {
          this._ignoredPaths.delete(t);
          if (typeof t === 'string') {
            for (const e of this._ignoredPaths) {
              if (isMatcherObject(e) && e.path === t) {
                this._ignoredPaths.delete(e);
              }
            }
          }
        }
        add(t, e, s) {
          const { cwd: i } = this.options;
          this.closed = false;
          this._closePromise = undefined;
          let r = unifyPaths(t);
          if (i) {
            r = r.map(t => {
              const e = getAbsolutePath(t, i);
              return e;
            });
          }
          r.forEach(t => {
            this._removeIgnoredPath(t);
          });
          this._userIgnored = undefined;
          if (!this._readyCount) this._readyCount = 0;
          this._readyCount += r.length;
          Promise.all(
            r.map(async t => {
              const i = await this._nodeFsHandler._addToNodeFs(
                t,
                !s,
                undefined,
                0,
                e
              );
              if (i) this._emitReady();
              return i;
            })
          ).then(t => {
            if (this.closed) return;
            t.forEach(t => {
              if (t) this.add(o.dirname(t), o.basename(e || t));
            });
          });
          return this;
        }
        unwatch(t) {
          if (this.closed) return this;
          const e = unifyPaths(t);
          const { cwd: s } = this.options;
          e.forEach(t => {
            if (!o.isAbsolute(t) && !this._closers.has(t)) {
              if (s) t = o.join(s, t);
              t = o.resolve(t);
            }
            this._closePath(t);
            this._addIgnoredPath(t);
            if (this._watched.has(t)) {
              this._addIgnoredPath({ path: t, recursive: true });
            }
            this._userIgnored = undefined;
          });
          return this;
        }
        close() {
          if (this._closePromise) {
            return this._closePromise;
          }
          this.closed = true;
          this.removeAllListeners();
          const t = [];
          this._closers.forEach(e =>
            e.forEach(e => {
              const s = e();
              if (s instanceof Promise) t.push(s);
            })
          );
          this._streams.forEach(t => t.destroy());
          this._userIgnored = undefined;
          this._readyCount = 0;
          this._readyEmitted = false;
          this._watched.forEach(t => t.dispose());
          this._closers.clear();
          this._watched.clear();
          this._streams.clear();
          this._symlinkPaths.clear();
          this._throttled.clear();
          this._closePromise = t.length
            ? Promise.all(t).then(() => undefined)
            : Promise.resolve();
          return this._closePromise;
        }
        getWatched() {
          const t = {};
          this._watched.forEach((e, s) => {
            const i = this.options.cwd ? o.relative(this.options.cwd, s) : s;
            const r = i || d;
            t[r] = e.getChildren().sort();
          });
          return t;
        }
        emitWithAll(t, e) {
          this.emit(t, ...e);
          if (t !== c.EVENTS.ERROR) this.emit(c.EVENTS.ALL, t, ...e);
        }
        async _emit(t, e, s) {
          if (this.closed) return;
          const i = this.options;
          if (c.isWindows) e = o.normalize(e);
          if (i.cwd) e = o.relative(i.cwd, e);
          const n = [e];
          if (s != null) n.push(s);
          const a = i.awaitWriteFinish;
          let h;
          if (a && (h = this._pendingWrites.get(e))) {
            h.lastChange = new Date();
            return this;
          }
          if (i.atomic) {
            if (t === c.EVENTS.UNLINK) {
              this._pendingUnlinks.set(e, [t, ...n]);
              setTimeout(
                () => {
                  this._pendingUnlinks.forEach((t, e) => {
                    this.emit(...t);
                    this.emit(c.EVENTS.ALL, ...t);
                    this._pendingUnlinks.delete(e);
                  });
                },
                typeof i.atomic === 'number' ? i.atomic : 100
              );
              return this;
            }
            if (t === c.EVENTS.ADD && this._pendingUnlinks.has(e)) {
              t = c.EVENTS.CHANGE;
              this._pendingUnlinks.delete(e);
            }
          }
          if (
            a &&
            (t === c.EVENTS.ADD || t === c.EVENTS.CHANGE) &&
            this._readyEmitted
          ) {
            const awfEmit = (e, s) => {
              if (e) {
                t = c.EVENTS.ERROR;
                n[0] = e;
                this.emitWithAll(t, n);
              } else if (s) {
                if (n.length > 1) {
                  n[1] = s;
                } else {
                  n.push(s);
                }
                this.emitWithAll(t, n);
              }
            };
            this._awaitWriteFinish(e, a.stabilityThreshold, t, awfEmit);
            return this;
          }
          if (t === c.EVENTS.CHANGE) {
            const t = !this._throttle(c.EVENTS.CHANGE, e, 50);
            if (t) return this;
          }
          if (
            i.alwaysStat &&
            s === undefined &&
            (t === c.EVENTS.ADD ||
              t === c.EVENTS.ADD_DIR ||
              t === c.EVENTS.CHANGE)
          ) {
            const t = i.cwd ? o.join(i.cwd, e) : e;
            let s;
            try {
              s = await (0, r.stat)(t);
            } catch (t) {}
            if (!s || this.closed) return;
            n.push(s);
          }
          this.emitWithAll(t, n);
          return this;
        }
        _handleError(t) {
          const e = t && t.code;
          if (
            t &&
            e !== 'ENOENT' &&
            e !== 'ENOTDIR' &&
            (!this.options.ignorePermissionErrors ||
              (e !== 'EPERM' && e !== 'EACCES'))
          ) {
            this.emit(c.EVENTS.ERROR, t);
          }
          return t || this.closed;
        }
        _throttle(t, e, s) {
          if (!this._throttled.has(t)) {
            this._throttled.set(t, new Map());
          }
          const i = this._throttled.get(t);
          if (!i) throw new Error('invalid throttle');
          const r = i.get(e);
          if (r) {
            r.count++;
            return false;
          }
          let n;
          const clear = () => {
            const t = i.get(e);
            const s = t ? t.count : 0;
            i.delete(e);
            clearTimeout(n);
            if (t) clearTimeout(t.timeoutObject);
            return s;
          };
          n = setTimeout(clear, s);
          const o = { timeoutObject: n, clear: clear, count: 0 };
          i.set(e, o);
          return o;
        }
        _incrReadyCount() {
          return this._readyCount++;
        }
        _awaitWriteFinish(t, e, s, r) {
          const n = this.options.awaitWriteFinish;
          if (typeof n !== 'object') return;
          const a = n.pollInterval;
          let c;
          let h = t;
          if (this.options.cwd && !o.isAbsolute(t)) {
            h = o.join(this.options.cwd, t);
          }
          const l = new Date();
          const d = this._pendingWrites;
          function awaitWriteFinishFn(s) {
            (0, i.stat)(h, (i, n) => {
              if (i || !d.has(t)) {
                if (i && i.code !== 'ENOENT') r(i);
                return;
              }
              const o = Number(new Date());
              if (s && n.size !== s.size) {
                d.get(t).lastChange = o;
              }
              const h = d.get(t);
              const l = o - h.lastChange;
              if (l >= e) {
                d.delete(t);
                r(undefined, n);
              } else {
                c = setTimeout(awaitWriteFinishFn, a, n);
              }
            });
          }
          if (!d.has(t)) {
            d.set(t, {
              lastChange: l,
              cancelWait: () => {
                d.delete(t);
                clearTimeout(c);
                return s;
              },
            });
            c = setTimeout(awaitWriteFinishFn, a);
          }
        }
        _isIgnored(t, e) {
          if (this.options.atomic && _.test(t)) return true;
          if (!this._userIgnored) {
            const { cwd: t } = this.options;
            const e = this.options.ignored;
            const s = (e || []).map(normalizeIgnored(t));
            const i = [...this._ignoredPaths];
            const r = [...i.map(normalizeIgnored(t)), ...s];
            this._userIgnored = anymatch(r, undefined);
          }
          return this._userIgnored(t, e);
        }
        _isntIgnored(t, e) {
          return !this._isIgnored(t, e);
        }
        _getWatchHelpers(t) {
          return new WatchHelper(t, this.options.followSymlinks, this);
        }
        _getWatchedDir(t) {
          const e = o.resolve(t);
          if (!this._watched.has(e))
            this._watched.set(e, new DirEntry(e, this._boundRemove));
          return this._watched.get(e);
        }
        _hasReadPermissions(t) {
          if (this.options.ignorePermissionErrors) return true;
          return Boolean(Number(t.mode) & 256);
        }
        _remove(t, e, s) {
          const i = o.join(t, e);
          const r = o.resolve(i);
          s = s != null ? s : this._watched.has(i) || this._watched.has(r);
          if (!this._throttle('remove', i, 100)) return;
          if (!s && this._watched.size === 1) {
            this.add(t, e, true);
          }
          const n = this._getWatchedDir(i);
          const a = n.getChildren();
          a.forEach(t => this._remove(i, t));
          const h = this._getWatchedDir(t);
          const l = h.has(e);
          h.remove(e);
          if (this._symlinkPaths.has(r)) {
            this._symlinkPaths.delete(r);
          }
          let d = i;
          if (this.options.cwd) d = o.relative(this.options.cwd, i);
          if (this.options.awaitWriteFinish && this._pendingWrites.has(d)) {
            const t = this._pendingWrites.get(d).cancelWait();
            if (t === c.EVENTS.ADD) return;
          }
          this._watched.delete(i);
          this._watched.delete(r);
          const f = s ? c.EVENTS.UNLINK_DIR : c.EVENTS.UNLINK;
          if (l && !this._isIgnored(i)) this._emit(f, i);
          this._closePath(i);
        }
        _closePath(t) {
          this._closeFile(t);
          const e = o.dirname(t);
          this._getWatchedDir(e).remove(o.basename(t));
        }
        _closeFile(t) {
          const e = this._closers.get(t);
          if (!e) return;
          e.forEach(t => t());
          this._closers.delete(t);
        }
        _addPathCloser(t, e) {
          if (!e) return;
          let s = this._closers.get(t);
          if (!s) {
            s = [];
            this._closers.set(t, s);
          }
          s.push(e);
        }
        _readdirp(t, e) {
          if (this.closed) return;
          const s = {
            type: c.EVENTS.ALL,
            alwaysStat: true,
            lstat: true,
            ...e,
            depth: 0,
          };
          let i = (0, a.readdirp)(t, s);
          this._streams.add(i);
          i.once(c.STR_CLOSE, () => {
            i = undefined;
          });
          i.once(c.STR_END, () => {
            if (i) {
              this._streams.delete(i);
              i = undefined;
            }
          });
          return i;
        }
      }
      e.FSWatcher = FSWatcher;
      function watch(t, e = {}) {
        const s = new FSWatcher(e);
        s.add(t);
        return s;
      }
      e['default'] = { watch: watch, FSWatcher: FSWatcher };
    },
    525: (t, e, s) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: true });
      e.ReaddirpStream = e.EntryTypes = void 0;
      e.readdirp = readdirp;
      e.readdirpPromise = readdirpPromise;
      const i = s(455);
      const r = s(75);
      const n = s(760);
      e.EntryTypes = {
        FILE_TYPE: 'files',
        DIR_TYPE: 'directories',
        FILE_DIR_TYPE: 'files_directories',
        EVERYTHING_TYPE: 'all',
      };
      const o = {
        root: '.',
        fileFilter: t => true,
        directoryFilter: t => true,
        type: e.EntryTypes.FILE_TYPE,
        lstat: false,
        depth: 2147483648,
        alwaysStat: false,
        highWaterMark: 4096,
      };
      Object.freeze(o);
      const a = 'READDIRP_RECURSIVE_ERROR';
      const c = new Set(['ENOENT', 'EPERM', 'EACCES', 'ELOOP', a]);
      const h = [
        e.EntryTypes.DIR_TYPE,
        e.EntryTypes.EVERYTHING_TYPE,
        e.EntryTypes.FILE_DIR_TYPE,
        e.EntryTypes.FILE_TYPE,
      ];
      const l = new Set([
        e.EntryTypes.DIR_TYPE,
        e.EntryTypes.EVERYTHING_TYPE,
        e.EntryTypes.FILE_DIR_TYPE,
      ]);
      const d = new Set([
        e.EntryTypes.EVERYTHING_TYPE,
        e.EntryTypes.FILE_DIR_TYPE,
        e.EntryTypes.FILE_TYPE,
      ]);
      const isNormalFlowError = t => c.has(t.code);
      const f = process.platform === 'win32';
      const emptyFn = t => true;
      const normalizeFilter = t => {
        if (t === undefined) return emptyFn;
        if (typeof t === 'function') return t;
        if (typeof t === 'string') {
          const e = t.trim();
          return t => t.basename === e;
        }
        if (Array.isArray(t)) {
          const e = t.map(t => t.trim());
          return t => e.some(e => t.basename === e);
        }
        return emptyFn;
      };
      class ReaddirpStream extends r.Readable {
        constructor(t = {}) {
          super({
            objectMode: true,
            autoDestroy: true,
            highWaterMark: t.highWaterMark,
          });
          const s = { ...o, ...t };
          const { root: r, type: a } = s;
          this._fileFilter = normalizeFilter(s.fileFilter);
          this._directoryFilter = normalizeFilter(s.directoryFilter);
          const c = s.lstat ? i.lstat : i.stat;
          if (f) {
            this._stat = t => c(t, { bigint: true });
          } else {
            this._stat = c;
          }
          this._maxDepth = s.depth ?? o.depth;
          this._wantsDir = a ? l.has(a) : false;
          this._wantsFile = a ? d.has(a) : false;
          this._wantsEverything = a === e.EntryTypes.EVERYTHING_TYPE;
          this._root = (0, n.resolve)(r);
          this._isDirent = !s.alwaysStat;
          this._statsProp = this._isDirent ? 'dirent' : 'stats';
          this._rdOptions = { encoding: 'utf8', withFileTypes: this._isDirent };
          this.parents = [this._exploreDir(r, 1)];
          this.reading = false;
          this.parent = undefined;
        }
        async _read(t) {
          if (this.reading) return;
          this.reading = true;
          try {
            while (!this.destroyed && t > 0) {
              const e = this.parent;
              const s = e && e.files;
              if (s && s.length > 0) {
                const { path: i, depth: r } = e;
                const n = s.splice(0, t).map(t => this._formatEntry(t, i));
                const o = await Promise.all(n);
                for (const e of o) {
                  if (!e) continue;
                  if (this.destroyed) return;
                  const s = await this._getEntryType(e);
                  if (s === 'directory' && this._directoryFilter(e)) {
                    if (r <= this._maxDepth) {
                      this.parents.push(this._exploreDir(e.fullPath, r + 1));
                    }
                    if (this._wantsDir) {
                      this.push(e);
                      t--;
                    }
                  } else if (
                    (s === 'file' || this._includeAsFile(e)) &&
                    this._fileFilter(e)
                  ) {
                    if (this._wantsFile) {
                      this.push(e);
                      t--;
                    }
                  }
                }
              } else {
                const t = this.parents.pop();
                if (!t) {
                  this.push(null);
                  break;
                }
                this.parent = await t;
                if (this.destroyed) return;
              }
            }
          } catch (t) {
            this.destroy(t);
          } finally {
            this.reading = false;
          }
        }
        async _exploreDir(t, e) {
          let s;
          try {
            s = await (0, i.readdir)(t, this._rdOptions);
          } catch (t) {
            this._onError(t);
          }
          return { files: s, depth: e, path: t };
        }
        async _formatEntry(t, e) {
          let s;
          const i = this._isDirent ? t.name : t;
          try {
            const r = (0, n.resolve)((0, n.join)(e, i));
            s = {
              path: (0, n.relative)(this._root, r),
              fullPath: r,
              basename: i,
            };
            s[this._statsProp] = this._isDirent ? t : await this._stat(r);
          } catch (t) {
            this._onError(t);
            return;
          }
          return s;
        }
        _onError(t) {
          if (isNormalFlowError(t) && !this.destroyed) {
            this.emit('warn', t);
          } else {
            this.destroy(t);
          }
        }
        async _getEntryType(t) {
          if (!t && this._statsProp in t) {
            return '';
          }
          const e = t[this._statsProp];
          if (e.isFile()) return 'file';
          if (e.isDirectory()) return 'directory';
          if (e && e.isSymbolicLink()) {
            const e = t.fullPath;
            try {
              const t = await (0, i.realpath)(e);
              const s = await (0, i.lstat)(t);
              if (s.isFile()) {
                return 'file';
              }
              if (s.isDirectory()) {
                const s = t.length;
                if (e.startsWith(t) && e.substr(s, 1) === n.sep) {
                  const s = new Error(
                    `Circular symlink detected: "${e}" points to "${t}"`
                  );
                  s.code = a;
                  return this._onError(s);
                }
                return 'directory';
              }
            } catch (t) {
              this._onError(t);
              return '';
            }
          }
        }
        _includeAsFile(t) {
          const e = t && t[this._statsProp];
          return e && this._wantsEverything && !e.isDirectory();
        }
      }
      e.ReaddirpStream = ReaddirpStream;
      function readdirp(t, s = {}) {
        let i = s.entryType || s.type;
        if (i === 'both') i = e.EntryTypes.FILE_DIR_TYPE;
        if (i) s.type = i;
        if (!t) {
          throw new Error(
            'readdirp: root argument is required. Usage: readdirp(root, options)'
          );
        } else if (typeof t !== 'string') {
          throw new TypeError(
            'readdirp: root argument must be a string. Usage: readdirp(root, options)'
          );
        } else if (i && !h.includes(i)) {
          throw new Error(
            `readdirp: Invalid type passed. Use one of ${h.join(', ')}`
          );
        }
        s.root = t;
        return new ReaddirpStream(s);
      }
      function readdirpPromise(t, e = {}) {
        return new Promise((s, i) => {
          const r = [];
          readdirp(t, e)
            .on('data', t => r.push(t))
            .on('end', () => s(r))
            .on('error', t => i(t));
        });
      }
      e['default'] = readdirp;
    },
    317: t => {
      'use strict';
      t.exports = require('child_process');
    },
    434: t => {
      'use strict';
      t.exports = require('events');
    },
    896: t => {
      'use strict';
      t.exports = require('fs');
    },
    943: t => {
      'use strict';
      t.exports = require('fs/promises');
    },
    455: t => {
      'use strict';
      t.exports = require('node:fs/promises');
    },
    760: t => {
      'use strict';
      t.exports = require('node:path');
    },
    75: t => {
      'use strict';
      t.exports = require('node:stream');
    },
    857: t => {
      'use strict';
      t.exports = require('os');
    },
    928: t => {
      'use strict';
      t.exports = require('path');
    },
    827: (t, e, s) => {
      const { exec: i } = s(127);
      const { getImageNameFromPath: r } = s(237);
      t.exports = async function (t) {
        const e = r(t);
        try {
          await i(`docker build -t ${e} ${t}`);
          console.log(`Docker image built successfully: ${e}`);
          return true;
        } catch (t) {
          console.error(`Failed to build Docker image: ${e}`, t);
          return false;
        }
      };
    },
    686: (t, e, s) => {
      const i = new Set();
      const r = 'supervised-container-';
      const n = s(664);
      function mapSupervisorName(t) {
        return `${r}${t}`;
      }
      function add(t) {
        if (!i.has(t)) {
          i.add(t);
          console.log(`Added to container list: ${t}`);
          refreshSupervisor();
        }
      }
      function remove(t) {
        if (i.has(t)) {
          i.delete(t);
          console.log(`Removed from container list: ${t}`);
          refreshSupervisor();
        }
      }
      function refreshSupervisor() {
        const t = new Map();
        i.forEach(e => {
          const s = mapSupervisorName(e);
          const i = `docker run --rm -it --name ${s} ${e}`;
          t.set(e, i);
        });
        n.updateSupervisorConfig('dockerRunner', t);
      }
      function restart(t) {
        if (i.has(t)) {
          const e = mapSupervisorName(t);
          n.restartSupervisorTask(e);
        } else {
          console.error(`Image not found in list: ${t}`);
        }
      }
      t.exports = { add: add, remove: remove, restart: restart };
    },
    664: (t, e, s) => {
      const i = s(896);
      const { execSync: r } = s(317);
      if (process.getuid && process.getuid() !== 0) {
        console.error('This script must be run as root.');
        process.exit(1);
      }
      function reloadSupervisor() {
        try {
          console.log('Reloading Supervisor...');
          r('supervisorctl reread', { stdio: 'inherit' });
          r('supervisorctl update', { stdio: 'inherit' });
        } catch (t) {
          console.error('Failed to reload Supervisor:', t.message);
        }
      }
      function generateSupervisorFile(t = new Map()) {
        const e = [];
        t.forEach((t, s) => {
          e.push(`[program:${s}]`);
          e.push(`command=${t}`);
          e.push(`autostart=true`);
          e.push(`autorestart=true`);
          e.push(`stderr_logfile=/var/log/supervisor/${s}.err.log`);
          e.push(`stdout_logfile=/var/log/supervisor/${s}.out.log`);
          e.push(`stderr_logfile_maxbytes=1MB`);
          e.push(`stderr_logfile_backups=5`);
          e.push(`stdout_logfile_maxbytes=1MB`);
          e.push(`stdout_logfile_backups=5`);
          e.push('');
        });
        return e.join('\n');
      }
      function updateSupervisorConfig(t, e = new Map()) {
        const s = `/etc/supervisor/conf.d/${t}.conf`;
        const r = generateSupervisorFile(e);
        if (i.existsSync(s)) {
          const t = i.readFileSync(s, 'utf8');
          if (t === r) {
            console.log('No changes to Supervisor config, skipping write.');
            return;
          }
        }
        i.writeFileSync(s, r);
        console.log(`Supervisor config updated at ${s}`);
        reloadSupervisor();
      }
      function restartSupervisorTask(t) {
        try {
          console.log(`Restarting Supervisor task: ${t}`);
          r(`supervisorctl restart ${t}`, { stdio: 'inherit' });
        } catch (e) {
          console.error(`Failed to restart Supervisor task ${t}:`, e.message);
        }
      }
      t.exports = {
        updateSupervisorConfig: updateSupervisorConfig,
        restartSupervisorTask: restartSupervisorTask,
      };
    },
    127: (t, e, s) => {
      const { exec: i } = s(317);
      function execAsync(t, e = true) {
        return new Promise((s, r) => {
          if (!t || typeof t !== 'string') {
            console.error('Invalid command:', t);
            return r(new Error('Invalid command'));
          }
          if (e) console.log(`Executing command: ${t}`);
          i(t, (i, n, o) => {
            if (e) {
              if (n) process.stdout.write(n);
              if (o) process.stderr.write(o);
            }
            if (i) {
              if (e) {
                console.error(`Error executing command "${t}":`, i.message);
              }
              r(i);
            } else {
              if (e) console.log(`Command executed successfully: ${t}`);
              s({ stdout: n, stderr: o });
            }
          });
        });
      }
      t.exports = { exec: execAsync };
    },
    494: t => {
      class UniqueQueue {
        constructor(t = Symbol('Queue')) {
          this.name = t;
          this.list = new Set();
        }
        enqueue(t) {
          if (!this.list.has(t)) {
            this.list.add(t);
            console.log(`Enqueued in ${this.name.toString()}: ${t}`);
          }
        }
        dequeue() {
          if (this.list.size === 0) {
            return null;
          }
          const t = this.list.values().next().value;
          this.list.delete(t);
          console.log(`Dequeued from ${this.name.toString()}: ${t}`);
          return t;
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
        has(t) {
          return this.list.has(t);
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
      t.exports = UniqueQueue;
    },
    237: (t, e, s) => {
      const i = s(928);
      const r = s(896);
      function getImageNameFromPath(t) {
        return i
          .basename(t)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
      }
      function isValidDockerPath(t) {
        const e = i.join(t, 'Dockerfile');
        if (!r.existsSync(e)) {
          console.warn(`Dockerfile not found at: ${e}`);
          return false;
        }
        const s = r.statSync(e);
        return s.isFile();
      }
      t.exports = {
        getImageNameFromPath: getImageNameFromPath,
        isValidDockerPath: isValidDockerPath,
      };
    },
    217: t => {
      const e = new Map();
      function debounce(t, s, i = 1e3) {
        if (e.has(t)) {
          clearTimeout(e.get(t));
        }
        e.set(
          t,
          setTimeout(() => {
            e.delete(t);
            s();
          }, i)
        );
      }
      function clearAll() {
        for (const t of e.values()) {
          clearTimeout(t);
        }
        e.clear();
      }
      t.exports = { debounce: debounce, clearAll: clearAll };
    },
    443: (t, e, s) => {
      const i = s(896);
      const r = s(928);
      const n = s(494);
      console.log('Queue module loaded.', n);
      const o = s(696);
      const a = s(217);
      const c = new n();
      const h = s(827);
      const l = s(686);
      const d = s(237);
      let f = true;
      t.exports = function (t) {
        if (!i.existsSync(t)) {
          throw new Error(`Docker path does not exist: ${t}`);
        }
        if (!i.statSync(t).isDirectory()) {
          throw new Error(`Docker path is not a directory: ${t}`);
        }
        console.log(`Watching Docker path: ${t}`);
        const e = o.createWatcher(t, (e, s) => {
          const i = r.relative(t, s);
          const n = i.split(r.sep)[0];
          const o = r.join(t, n);
          a.debounce(o, () => handleDirectoryChange(o), 1e3);
        });
        process.on('SIGINT', () => {
          console.log('Shutting down...');
          e.close();
          f = false;
          process.exit(0);
        });
        buildThread();
      };
      function handleDirectoryChange(t) {
        if (!i.existsSync(t)) {
          l.remove(d.getImageNameFromPath(t));
          return;
        }
        if (!i.statSync(t).isDirectory()) {
          return;
        }
        const e = r.join(t, 'Dockerfile');
        if (!i.existsSync(e)) {
          return;
        }
        l.add(d.getImageNameFromPath(t));
        c.enqueue(t);
      }
      async function buildThread() {
        while (f) {
          const t = c.dequeue();
          if (t === null) {
            await new Promise(t => setTimeout(t, 1e3));
            continue;
          }
          const e = await h(t);
          if (e) {
            handleNewImageBuild(t);
          }
        }
      }
      function handleNewImageBuild(t) {
        l.restart(d.getImageNameFromPath(t));
      }
    },
    696: (t, e, s) => {
      const i = s(315);
      t.exports.createWatcher = function (t, e) {
        console.log(`Creating watcher for: ${t}`);
        const s = i.watch(t, { ignoreInitial: false, persistent: true });
        s.on('all', (t, s) => {
          e(t, s);
        });
        return s;
      };
    },
  };
  var e = {};
  function __nccwpck_require__(s) {
    var i = e[s];
    if (i !== undefined) {
      return i.exports;
    }
    var r = (e[s] = { exports: {} });
    var n = true;
    try {
      t[s](r, r.exports, __nccwpck_require__);
      n = false;
    } finally {
      if (n) delete e[s];
    }
    return r.exports;
  }
  if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab = __dirname + '/';
  var s = {};
  (() => {
    'use strict';
    if (process.argv.length != 3) {
      console.error('Usage: node index.js <dockerPath>');
      process.exit(1);
    }
    const t = process.argv[2];
    const e = __nccwpck_require__(443);
    e(t);
  })();
  module.exports = s;
})();
//# sourceMappingURL=index.js.map

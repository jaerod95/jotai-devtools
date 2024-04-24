try {
  (() => {
    var ne = Object.create;
    var F = Object.defineProperty;
    var te = Object.getOwnPropertyDescriptor;
    var re = Object.getOwnPropertyNames;
    var ce = Object.getPrototypeOf,
      ie = Object.prototype.hasOwnProperty;
    var w = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, {
              get: (o, a) => (typeof require < 'u' ? require : o)[a],
            })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var x = (e, o) => () => (e && (o = e((e = 0))), o);
    var ae = (e, o) => () => (
      o || e((o = { exports: {} }).exports, o), o.exports
    );
    var se = (e, o, a, r) => {
      if ((o && typeof o == 'object') || typeof o == 'function')
        for (let c of re(o))
          !ie.call(e, c) &&
            c !== a &&
            F(e, c, {
              get: () => o[c],
              enumerable: !(r = te(o, c)) || r.enumerable,
            });
      return e;
    };
    var le = (e, o, a) => (
      (a = e != null ? ne(ce(e)) : {}),
      se(
        o || !e || !e.__esModule
          ? F(a, 'default', { value: e, enumerable: !0 })
          : a,
        e,
      )
    );
    var I = x(() => {});
    var d = x(() => {});
    var m = x(() => {});
    var V = ae((W, G) => {
      I();
      d();
      m();
      (function (e) {
        if (typeof W == 'object' && typeof G < 'u') G.exports = e();
        else if (typeof define == 'function' && define.amd) define([], e);
        else {
          var o;
          typeof window < 'u' || typeof window < 'u'
            ? (o = window)
            : typeof self < 'u'
              ? (o = self)
              : (o = this),
            (o.memoizerific = e());
        }
      })(function () {
        var e, o, a;
        return (function r(c, h, s) {
          function t(i, p) {
            if (!h[i]) {
              if (!c[i]) {
                var u = typeof w == 'function' && w;
                if (!p && u) return u(i, !0);
                if (n) return n(i, !0);
                var b = new Error("Cannot find module '" + i + "'");
                throw ((b.code = 'MODULE_NOT_FOUND'), b);
              }
              var f = (h[i] = { exports: {} });
              c[i][0].call(
                f.exports,
                function (g) {
                  var S = c[i][1][g];
                  return t(S || g);
                },
                f,
                f.exports,
                r,
                c,
                h,
                s,
              );
            }
            return h[i].exports;
          }
          for (var n = typeof w == 'function' && w, l = 0; l < s.length; l++)
            t(s[l]);
          return t;
        })(
          {
            1: [
              function (r, c, h) {
                c.exports = function (s) {
                  if (typeof Map != 'function' || s) {
                    var t = r('./similar');
                    return new t();
                  } else return new Map();
                };
              },
              { './similar': 2 },
            ],
            2: [
              function (r, c, h) {
                function s() {
                  return (
                    (this.list = []),
                    (this.lastItem = void 0),
                    (this.size = 0),
                    this
                  );
                }
                (s.prototype.get = function (t) {
                  var n;
                  if (this.lastItem && this.isEqual(this.lastItem.key, t))
                    return this.lastItem.val;
                  if (((n = this.indexOf(t)), n >= 0))
                    return (this.lastItem = this.list[n]), this.list[n].val;
                }),
                  (s.prototype.set = function (t, n) {
                    var l;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? ((this.lastItem.val = n), this)
                      : ((l = this.indexOf(t)),
                        l >= 0
                          ? ((this.lastItem = this.list[l]),
                            (this.list[l].val = n),
                            this)
                          : ((this.lastItem = { key: t, val: n }),
                            this.list.push(this.lastItem),
                            this.size++,
                            this));
                  }),
                  (s.prototype.delete = function (t) {
                    var n;
                    if (
                      (this.lastItem &&
                        this.isEqual(this.lastItem.key, t) &&
                        (this.lastItem = void 0),
                      (n = this.indexOf(t)),
                      n >= 0)
                    )
                      return this.size--, this.list.splice(n, 1)[0];
                  }),
                  (s.prototype.has = function (t) {
                    var n;
                    return this.lastItem && this.isEqual(this.lastItem.key, t)
                      ? !0
                      : ((n = this.indexOf(t)),
                        n >= 0 ? ((this.lastItem = this.list[n]), !0) : !1);
                  }),
                  (s.prototype.forEach = function (t, n) {
                    var l;
                    for (l = 0; l < this.size; l++)
                      t.call(
                        n || this,
                        this.list[l].val,
                        this.list[l].key,
                        this,
                      );
                  }),
                  (s.prototype.indexOf = function (t) {
                    var n;
                    for (n = 0; n < this.size; n++)
                      if (this.isEqual(this.list[n].key, t)) return n;
                    return -1;
                  }),
                  (s.prototype.isEqual = function (t, n) {
                    return t === n || (t !== t && n !== n);
                  }),
                  (c.exports = s);
              },
              {},
            ],
            3: [
              function (r, c, h) {
                var s = r('map-or-similar');
                c.exports = function (i) {
                  var p = new s(!1),
                    u = [];
                  return function (b) {
                    var f = function () {
                      var g = p,
                        S,
                        B,
                        T = arguments.length - 1,
                        E = Array(T + 1),
                        A = !0,
                        O;
                      if ((f.numArgs || f.numArgs === 0) && f.numArgs !== T + 1)
                        throw new Error(
                          'Memoizerific functions should always be called with the same number of arguments',
                        );
                      for (O = 0; O < T; O++) {
                        if (
                          ((E[O] = { cacheItem: g, arg: arguments[O] }),
                          g.has(arguments[O]))
                        ) {
                          g = g.get(arguments[O]);
                          continue;
                        }
                        (A = !1),
                          (S = new s(!1)),
                          g.set(arguments[O], S),
                          (g = S);
                      }
                      return (
                        A &&
                          (g.has(arguments[T])
                            ? (B = g.get(arguments[T]))
                            : (A = !1)),
                        A ||
                          ((B = b.apply(null, arguments)),
                          g.set(arguments[T], B)),
                        i > 0 &&
                          ((E[T] = { cacheItem: g, arg: arguments[T] }),
                          A ? t(u, E) : u.push(E),
                          u.length > i && n(u.shift())),
                        (f.wasMemoized = A),
                        (f.numArgs = T + 1),
                        B
                      );
                    };
                    return (
                      (f.limit = i),
                      (f.wasMemoized = !1),
                      (f.cache = p),
                      (f.lru = u),
                      f
                    );
                  };
                };
                function t(i, p) {
                  var u = i.length,
                    b = p.length,
                    f,
                    g,
                    S;
                  for (g = 0; g < u; g++) {
                    for (f = !0, S = 0; S < b; S++)
                      if (!l(i[g][S].arg, p[S].arg)) {
                        f = !1;
                        break;
                      }
                    if (f) break;
                  }
                  i.push(i.splice(g, 1)[0]);
                }
                function n(i) {
                  var p = i.length,
                    u = i[p - 1],
                    b,
                    f;
                  for (
                    u.cacheItem.delete(u.arg), f = p - 2;
                    f >= 0 &&
                    ((u = i[f]), (b = u.cacheItem.get(u.arg)), !b || !b.size);
                    f--
                  )
                    u.cacheItem.delete(u.arg);
                }
                function l(i, p) {
                  return i === p || (i !== i && p !== p);
                }
              },
              { 'map-or-similar': 1 },
            ],
          },
          {},
          [3],
        )(3);
      });
    });
    I();
    d();
    m();
    I();
    d();
    m();
    I();
    d();
    m();
    I();
    d();
    m();
    var C = __REACT__,
      {
        Children: ke,
        Component: Te,
        Fragment: R,
        Profiler: Oe,
        PureComponent: ve,
        StrictMode: Ae,
        Suspense: we,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Be,
        cloneElement: Ee,
        createContext: xe,
        createElement: Re,
        createFactory: Le,
        createRef: Pe,
        forwardRef: Me,
        isValidElement: De,
        lazy: Ge,
        memo: L,
        startTransition: He,
        unstable_act: Ne,
        useCallback: q,
        useContext: Ue,
        useDebugValue: Fe,
        useDeferredValue: qe,
        useEffect: ze,
        useId: Ke,
        useImperativeHandle: Ye,
        useInsertionEffect: We,
        useLayoutEffect: Ve,
        useMemo: z,
        useReducer: $e,
        useRef: je,
        useState: K,
        useSyncExternalStore: Ze,
        useTransition: Je,
        version: Qe,
      } = __REACT__;
    I();
    d();
    m();
    var to = __STORYBOOK_API__,
      {
        ActiveTabs: ro,
        Consumer: co,
        ManagerContext: io,
        Provider: ao,
        addons: P,
        combineParameters: so,
        controlOrMetaKey: lo,
        controlOrMetaSymbol: uo,
        eventMatchesShortcut: Io,
        eventToShortcut: mo,
        isMacLike: fo,
        isShortcutTaken: po,
        keyToSymbol: ho,
        merge: go,
        mockChannel: bo,
        optionOrAltSymbol: So,
        shortcutMatchesShortcut: Co,
        shortcutToHumanString: yo,
        types: Y,
        useAddonState: _o,
        useArgTypes: ko,
        useArgs: To,
        useChannel: Oo,
        useGlobalTypes: vo,
        useGlobals: M,
        useParameter: D,
        useSharedState: Ao,
        useStoryPrepared: wo,
        useStorybookApi: Bo,
        useStorybookState: Eo,
      } = __STORYBOOK_API__;
    var U = le(V());
    I();
    d();
    m();
    var No = __STORYBOOK_CLIENT_LOGGER__,
      {
        deprecate: Uo,
        logger: H,
        once: Fo,
        pretty: qo,
      } = __STORYBOOK_CLIENT_LOGGER__;
    I();
    d();
    m();
    var Vo = __STORYBOOK_COMPONENTS__,
      {
        A: $o,
        ActionBar: jo,
        AddonPanel: Zo,
        Badge: Jo,
        Bar: Qo,
        Blockquote: Xo,
        Button: en,
        ClipboardCode: on,
        Code: nn,
        DL: tn,
        Div: rn,
        DocumentWrapper: cn,
        EmptyTabContent: an,
        ErrorFormatter: sn,
        FlexBar: ln,
        Form: un,
        H1: In,
        H2: dn,
        H3: mn,
        H4: fn,
        H5: pn,
        H6: hn,
        HR: gn,
        IconButton: N,
        IconButtonSkeleton: bn,
        Icons: Sn,
        Img: Cn,
        LI: yn,
        Link: _n,
        ListItem: kn,
        Loader: Tn,
        OL: On,
        P: vn,
        Placeholder: An,
        Pre: wn,
        ResetWrapper: Bn,
        ScrollArea: En,
        Separator: xn,
        Spaced: Rn,
        Span: Ln,
        StorybookIcon: Pn,
        StorybookLogo: Mn,
        Symbols: Dn,
        SyntaxHighlighter: Gn,
        TT: Hn,
        TabBar: Nn,
        TabButton: Un,
        TabWrapper: Fn,
        Table: qn,
        Tabs: zn,
        TabsState: Kn,
        TooltipLinkList: $,
        TooltipMessage: Yn,
        TooltipNote: Wn,
        UL: Vn,
        WithTooltip: j,
        WithTooltipPure: $n,
        Zoom: jn,
        codeCommon: Zn,
        components: Jn,
        createCopyToClipboardFunction: Qn,
        getStoryHref: Xn,
        icons: et,
        interleaveSeparators: ot,
        nameSpaceClassNames: nt,
        resetComponents: tt,
        withReset: rt,
      } = __STORYBOOK_COMPONENTS__;
    I();
    d();
    m();
    var lt = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ut,
        AccessibilityIcon: It,
        AddIcon: dt,
        AdminIcon: mt,
        AlertAltIcon: ft,
        AlertIcon: pt,
        AlignLeftIcon: ht,
        AlignRightIcon: gt,
        AppleIcon: bt,
        ArrowDownIcon: St,
        ArrowLeftIcon: Ct,
        ArrowRightIcon: yt,
        ArrowSolidDownIcon: _t,
        ArrowSolidLeftIcon: kt,
        ArrowSolidRightIcon: Tt,
        ArrowSolidUpIcon: Ot,
        ArrowUpIcon: vt,
        AzureDevOpsIcon: At,
        BackIcon: wt,
        BasketIcon: Bt,
        BatchAcceptIcon: Et,
        BatchDenyIcon: xt,
        BeakerIcon: Rt,
        BellIcon: Lt,
        BitbucketIcon: Pt,
        BoldIcon: Mt,
        BookIcon: Dt,
        BookmarkHollowIcon: Gt,
        BookmarkIcon: Ht,
        BottomBarIcon: Nt,
        BottomBarToggleIcon: Ut,
        BoxIcon: Ft,
        BranchIcon: qt,
        BrowserIcon: zt,
        ButtonIcon: Kt,
        CPUIcon: Yt,
        CalendarIcon: Wt,
        CameraIcon: Vt,
        CategoryIcon: $t,
        CertificateIcon: jt,
        ChangedIcon: Zt,
        ChatIcon: Jt,
        CheckIcon: Qt,
        ChevronDownIcon: Xt,
        ChevronLeftIcon: er,
        ChevronRightIcon: or,
        ChevronSmallDownIcon: nr,
        ChevronSmallLeftIcon: tr,
        ChevronSmallRightIcon: rr,
        ChevronSmallUpIcon: cr,
        ChevronUpIcon: ir,
        ChromaticIcon: ar,
        ChromeIcon: sr,
        CircleHollowIcon: lr,
        CircleIcon: ur,
        ClearIcon: Ir,
        CloseAltIcon: dr,
        CloseIcon: mr,
        CloudHollowIcon: fr,
        CloudIcon: pr,
        CogIcon: hr,
        CollapseIcon: gr,
        CommandIcon: br,
        CommentAddIcon: Sr,
        CommentIcon: Cr,
        CommentsIcon: yr,
        CommitIcon: _r,
        CompassIcon: kr,
        ComponentDrivenIcon: Tr,
        ComponentIcon: Or,
        ContrastIcon: vr,
        ControlsIcon: Ar,
        CopyIcon: wr,
        CreditIcon: Br,
        CrossIcon: Er,
        DashboardIcon: xr,
        DatabaseIcon: Rr,
        DeleteIcon: Lr,
        DiamondIcon: Pr,
        DirectionIcon: Mr,
        DiscordIcon: Dr,
        DocChartIcon: Gr,
        DocListIcon: Hr,
        DocumentIcon: Nr,
        DownloadIcon: Ur,
        DragIcon: Fr,
        EditIcon: qr,
        EllipsisIcon: zr,
        EmailIcon: Kr,
        ExpandAltIcon: Yr,
        ExpandIcon: Wr,
        EyeCloseIcon: Vr,
        EyeIcon: $r,
        FaceHappyIcon: jr,
        FaceNeutralIcon: Zr,
        FaceSadIcon: Jr,
        FacebookIcon: Qr,
        FailedIcon: Xr,
        FastForwardIcon: ec,
        FigmaIcon: oc,
        FilterIcon: nc,
        FlagIcon: tc,
        FolderIcon: rc,
        FormIcon: cc,
        GDriveIcon: ic,
        GithubIcon: ac,
        GitlabIcon: sc,
        GlobeIcon: lc,
        GoogleIcon: uc,
        GraphBarIcon: Ic,
        GraphLineIcon: dc,
        GraphqlIcon: mc,
        GridAltIcon: fc,
        GridIcon: Z,
        GrowIcon: pc,
        HeartHollowIcon: hc,
        HeartIcon: gc,
        HomeIcon: bc,
        HourglassIcon: Sc,
        InfoIcon: Cc,
        ItalicIcon: yc,
        JumpToIcon: _c,
        KeyIcon: kc,
        LightningIcon: Tc,
        LightningOffIcon: Oc,
        LinkBrokenIcon: vc,
        LinkIcon: Ac,
        LinkedinIcon: wc,
        LinuxIcon: Bc,
        ListOrderedIcon: Ec,
        ListUnorderedIcon: xc,
        LocationIcon: Rc,
        LockIcon: Lc,
        MarkdownIcon: Pc,
        MarkupIcon: Mc,
        MediumIcon: Dc,
        MemoryIcon: Gc,
        MenuIcon: Hc,
        MergeIcon: Nc,
        MirrorIcon: Uc,
        MobileIcon: Fc,
        MoonIcon: qc,
        NutIcon: zc,
        OutboxIcon: Kc,
        OutlineIcon: Yc,
        PaintBrushIcon: Wc,
        PaperClipIcon: Vc,
        ParagraphIcon: $c,
        PassedIcon: jc,
        PhoneIcon: Zc,
        PhotoDragIcon: Jc,
        PhotoIcon: J,
        PinAltIcon: Qc,
        PinIcon: Xc,
        PlayBackIcon: ei,
        PlayIcon: oi,
        PlayNextIcon: ni,
        PlusIcon: ti,
        PointerDefaultIcon: ri,
        PointerHandIcon: ci,
        PowerIcon: ii,
        PrintIcon: ai,
        ProceedIcon: si,
        ProfileIcon: li,
        PullRequestIcon: ui,
        QuestionIcon: Ii,
        RSSIcon: di,
        RedirectIcon: mi,
        ReduxIcon: fi,
        RefreshIcon: pi,
        ReplyIcon: hi,
        RepoIcon: gi,
        RequestChangeIcon: bi,
        RewindIcon: Si,
        RulerIcon: Ci,
        SearchIcon: yi,
        ShareAltIcon: _i,
        ShareIcon: ki,
        ShieldIcon: Ti,
        SideBySideIcon: Oi,
        SidebarAltIcon: vi,
        SidebarAltToggleIcon: Ai,
        SidebarIcon: wi,
        SidebarToggleIcon: Bi,
        SpeakerIcon: Ei,
        StackedIcon: xi,
        StarHollowIcon: Ri,
        StarIcon: Li,
        StickerIcon: Pi,
        StopAltIcon: Mi,
        StopIcon: Di,
        StorybookIcon: Gi,
        StructureIcon: Hi,
        SubtractIcon: Ni,
        SunIcon: Ui,
        SupportIcon: Fi,
        SwitchAltIcon: qi,
        SyncIcon: zi,
        TabletIcon: Ki,
        ThumbsUpIcon: Yi,
        TimeIcon: Wi,
        TimerIcon: Vi,
        TransferIcon: $i,
        TrashIcon: ji,
        TwitterIcon: Zi,
        TypeIcon: Ji,
        UbuntuIcon: Qi,
        UndoIcon: Xi,
        UnfoldIcon: ea,
        UnlockIcon: oa,
        UnpinIcon: na,
        UploadIcon: ta,
        UserAddIcon: ra,
        UserAltIcon: ca,
        UserIcon: ia,
        UsersIcon: aa,
        VSCodeIcon: sa,
        VerifiedIcon: la,
        VideoIcon: ua,
        WandIcon: Ia,
        WatchIcon: da,
        WindowsIcon: ma,
        WrenchIcon: fa,
        YoutubeIcon: pa,
        ZoomIcon: ha,
        ZoomOutIcon: ga,
        ZoomResetIcon: ba,
        iconList: Sa,
      } = __STORYBOOK_ICONS__;
    I();
    d();
    m();
    var Ta = __STORYBOOK_THEMING__,
      {
        CacheProvider: Oa,
        ClassNames: va,
        Global: Aa,
        ThemeProvider: wa,
        background: Ba,
        color: Ea,
        convert: xa,
        create: Ra,
        createCache: La,
        createGlobal: Pa,
        createReset: Ma,
        css: Da,
        darken: Ga,
        ensure: Ha,
        ignoreSsrWarning: Na,
        isPropValid: Ua,
        jsx: Fa,
        keyframes: qa,
        lighten: za,
        styled: Q,
        themes: Ka,
        typography: Ya,
        useTheme: Wa,
        withTheme: Va,
      } = __STORYBOOK_THEMING__;
    I();
    d();
    m();
    var Qa = (() => {
      let e;
      return (
        typeof window < 'u'
          ? (e = window)
          : typeof globalThis < 'u'
            ? (e = globalThis)
            : typeof window < 'u'
              ? (e = window)
              : typeof self < 'u'
                ? (e = self)
                : (e = {}),
        e
      );
    })();
    I();
    d();
    m();
    function X(e) {
      for (var o = [], a = 1; a < arguments.length; a++)
        o[a - 1] = arguments[a];
      var r = Array.from(typeof e == 'string' ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var c = r.reduce(function (t, n) {
        var l = n.match(/\n([\t ]+|(?!\s).)/g);
        return l
          ? t.concat(
              l.map(function (i) {
                var p, u;
                return (u =
                  (p = i.match(/[\t ]/g)) === null || p === void 0
                    ? void 0
                    : p.length) !== null && u !== void 0
                  ? u
                  : 0;
              }),
            )
          : t;
      }, []);
      if (c.length) {
        var h = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, c) +
            '}',
          'g',
        );
        r = r.map(function (t) {
          return t.replace(
            h,
            `
`,
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, '');
      var s = r[0];
      return (
        o.forEach(function (t, n) {
          var l = s.match(/(?:^|\n)( *)$/),
            i = l ? l[1] : '',
            p = t;
          typeof t == 'string' &&
            t.includes(`
`) &&
            (p = String(t)
              .split(
                `
`,
              )
              .map(function (u, b) {
                return b === 0 ? u : '' + i + u;
              }).join(`
`)),
            (s += p + r[n + 1]);
        }),
        s
      );
    }
    var ee = 'storybook/background',
      v = 'backgrounds',
      ue = Q.span(
        ({ background: e }) => ({
          borderRadius: '1rem',
          display: 'block',
          height: '1rem',
          width: '1rem',
          background: e,
        }),
        ({ theme: e }) => ({
          boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        }),
      ),
      Ie = (e, o = [], a) => {
        if (e === 'transparent') return 'transparent';
        if (o.find((c) => c.value === e)) return e;
        let r = o.find((c) => c.name === a);
        if (r) return r.value;
        if (a) {
          let c = o.map((h) => h.name).join(', ');
          H.warn(X`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${c}.
      `);
        }
        return 'transparent';
      },
      oe = (0, U.default)(1e3)((e, o, a, r, c, h) => ({
        id: e || o,
        title: o,
        onClick: () => {
          c({ selected: a, name: o });
        },
        value: a,
        right: r ? C.createElement(ue, { background: a }) : void 0,
        active: h,
      })),
      de = (0, U.default)(10)((e, o, a) => {
        let r = e.map(({ name: c, value: h }) =>
          oe(null, c, h, !0, a, h === o),
        );
        return o !== 'transparent'
          ? [oe('reset', 'Clear background', 'transparent', null, a, !1), ...r]
          : r;
      }),
      me = { default: null, disable: !0, values: [] },
      fe = L(function () {
        let e = D(v, me),
          [o, a] = K(!1),
          [r, c] = M(),
          h = r[v]?.value,
          s = z(() => Ie(h, e.values, e.default), [e, h]);
        Array.isArray(e) &&
          H.warn(
            'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md',
          );
        let t = q(
          (n) => {
            c({ [v]: { ...r[v], value: n } });
          },
          [e, r, c],
        );
        return e.disable
          ? null
          : C.createElement(
              R,
              null,
              C.createElement(
                j,
                {
                  placement: 'top',
                  closeOnOutsideClick: !0,
                  tooltip: ({ onHide: n }) =>
                    C.createElement($, {
                      links: de(e.values, s, ({ selected: l }) => {
                        s !== l && t(l), n();
                      }),
                    }),
                  onVisibleChange: a,
                },
                C.createElement(
                  N,
                  {
                    key: 'background',
                    title: 'Change the background of the preview',
                    active: s !== 'transparent' || o,
                  },
                  C.createElement(J, null),
                ),
              ),
            );
      }),
      pe = L(function () {
        let [e, o] = M(),
          { grid: a } = D(v, { grid: { disable: !1 } });
        if (a?.disable) return null;
        let r = e[v]?.grid || !1;
        return C.createElement(
          N,
          {
            key: 'background',
            active: r,
            title: 'Apply a grid to the preview',
            onClick: () => o({ [v]: { ...e[v], grid: !r } }),
          },
          C.createElement(Z, null),
        );
      });
    P.register(ee, () => {
      P.add(ee, {
        title: 'Backgrounds',
        type: Y.TOOL,
        match: ({ viewMode: e, tabId: o }) =>
          !!(e && e.match(/^(story|docs)$/)) && !o,
        render: () =>
          C.createElement(
            R,
            null,
            C.createElement(fe, null),
            C.createElement(pe, null),
          ),
      });
    });
  })();
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  );
}

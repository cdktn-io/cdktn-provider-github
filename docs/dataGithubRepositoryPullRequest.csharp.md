# `dataGithubRepositoryPullRequest` Submodule <a name="`dataGithubRepositoryPullRequest` Submodule" id="@cdktn/provider-github.dataGithubRepositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryPullRequest <a name="DataGithubRepositoryPullRequest" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequest(Construct Scope, string Id, DataGithubRepositoryPullRequestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig">DataGithubRepositoryPullRequestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig">DataGithubRepositoryPullRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOwner"></a>

```csharp
private void ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGithubRepositoryPullRequest resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequest.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Github;

DataGithubRepositoryPullRequest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGithubRepositoryPullRequest resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryPullRequest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryPullRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRef">BaseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseSha">BaseSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.draft">Draft</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headOwner">HeadOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRef">HeadRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRepository">HeadRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headSha">HeadSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.maintainerCanModify">MaintainerCanModify</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedAt">OpenedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedBy">OpenedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepositoryInput">BaseRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.numberInput">NumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepository">BaseRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.owner">Owner</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRef"></a>

```csharp
public string BaseRef { get; }
```

- *Type:* string

---

##### `BaseSha`<sup>Required</sup> <a name="BaseSha" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseSha"></a>

```csharp
public string BaseSha { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Draft`<sup>Required</sup> <a name="Draft" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.draft"></a>

```csharp
public IResolvable Draft { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HeadOwner`<sup>Required</sup> <a name="HeadOwner" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headOwner"></a>

```csharp
public string HeadOwner { get; }
```

- *Type:* string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRef"></a>

```csharp
public string HeadRef { get; }
```

- *Type:* string

---

##### `HeadRepository`<sup>Required</sup> <a name="HeadRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRepository"></a>

```csharp
public string HeadRepository { get; }
```

- *Type:* string

---

##### `HeadSha`<sup>Required</sup> <a name="HeadSha" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headSha"></a>

```csharp
public string HeadSha { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MaintainerCanModify`<sup>Required</sup> <a name="MaintainerCanModify" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.maintainerCanModify"></a>

```csharp
public IResolvable MaintainerCanModify { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedAt"></a>

```csharp
public double OpenedAt { get; }
```

- *Type:* double

---

##### `OpenedBy`<sup>Required</sup> <a name="OpenedBy" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedBy"></a>

```csharp
public string OpenedBy { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `BaseRepositoryInput`<sup>Optional</sup> <a name="BaseRepositoryInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepositoryInput"></a>

```csharp
public string BaseRepositoryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.numberInput"></a>

```csharp
public double NumberInput { get; }
```

- *Type:* double

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepository"></a>

```csharp
public string BaseRepository { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryPullRequestConfig <a name="DataGithubRepositoryPullRequestConfig" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Github;

new DataGithubRepositoryPullRequestConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BaseRepository,
    double Number,
    string Id = null,
    string Owner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.baseRepository">BaseRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.number">Number</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}. |
| <code><a href="#@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BaseRepository`<sup>Required</sup> <a name="BaseRepository" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.baseRepository"></a>

```csharp
public string BaseRepository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}.

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.number"></a>

```csharp
public double Number { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}.

---



